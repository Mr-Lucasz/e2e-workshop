// Dashboard de Métricas para Cypress
class TestDashboard {
  constructor() {
    this.metrics = {
      totalTests: 0,
      passedTests: 0,
      failedTests: 0,
      skippedTests: 0,
      coverage: 0,
      startTime: null,
      endTime: null
    };
    
    this.init();
  }

  init() {
    // Criar elemento do dashboard
    this.createDashboardElement();
    
    // Interceptar eventos de teste
    this.interceptTestEvents();
  }

  createDashboardElement() {
    const dashboard = document.createElement('div');
    dashboard.id = 'cypress-dashboard';
    dashboard.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: rgba(0, 0, 0, 0.9);
      color: white;
      padding: 15px;
      border-radius: 8px;
      font-family: 'Courier New', monospace;
      font-size: 12px;
      z-index: 9999;
      min-width: 200px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    `;
    
    dashboard.innerHTML = `
      <div style="margin-bottom: 10px; font-weight: bold; color: #00ff00;">
        🧪 Cypress Test Dashboard
      </div>
      <div>📊 Total: <span id="total-tests">0</span></div>
      <div>✅ Passed: <span id="passed-tests" style="color: #00ff00;">0</span></div>
      <div>❌ Failed: <span id="failed-tests" style="color: #ff0000;">0</span></div>
      <div>⏭️ Skipped: <span id="skipped-tests" style="color: #ffff00;">0</span></div>
      <div>📈 Coverage: <span id="coverage" style="color: #00ffff;">0%</span></div>
      <div>⏱️ Duration: <span id="duration">0s</span></div>
    `;
    
    document.body.appendChild(dashboard);
  }

  interceptTestEvents() {
    // Interceptar eventos do Cypress
    if (window.Cypress) {
      Cypress.on('test:after:run', (attributes) => {
        this.updateMetrics(attributes);
      });
      
      Cypress.on('run:start', () => {
        this.metrics.startTime = Date.now();
        this.updateDisplay();
      });
      
      Cypress.on('run:end', () => {
        this.metrics.endTime = Date.now();
        this.calculateCoverage();
        this.updateDisplay();
        this.saveMetrics();
      });
    }
  }

  updateMetrics(testAttributes) {
    this.metrics.totalTests++;
    
    if (testAttributes.state === 'passed') {
      this.metrics.passedTests++;
    } else if (testAttributes.state === 'failed') {
      this.metrics.failedTests++;
    } else if (testAttributes.state === 'skipped') {
      this.metrics.skippedTests++;
    }
    
    this.updateDisplay();
  }

  calculateCoverage() {
    if (this.metrics.totalTests > 0) {
      this.metrics.coverage = Math.round((this.metrics.passedTests / this.metrics.totalTests) * 100);
    }
  }

  updateDisplay() {
    const elements = {
      'total-tests': this.metrics.totalTests,
      'passed-tests': this.metrics.passedTests,
      'failed-tests': this.metrics.failedTests,
      'skipped-tests': this.metrics.skippedTests,
      'coverage': `${this.metrics.coverage}%`,
      'duration': this.getDuration()
    };

    Object.entries(elements).forEach(([id, value]) => {
      const element = document.getElementById(id);
      if (element) {
        element.textContent = value;
      }
    });
  }

  getDuration() {
    if (!this.metrics.startTime || !this.metrics.endTime) {
      return '0s';
    }
    
    const duration = Math.round((this.metrics.endTime - this.metrics.startTime) / 1000);
    return `${duration}s`;
  }

  async saveMetrics() {
    try {
      // Salvar métricas localmente
      const metricsData = {
        ...this.metrics,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href
      };
      
      // Salvar no localStorage para persistência
      localStorage.setItem('cypress-metrics', JSON.stringify(metricsData));
      
      // Salvar arquivo se possível (Node.js environment)
      if (typeof require !== 'undefined') {
        const fs = require('fs-extra');
        const path = require('path');
        
        const resultsDir = path.join(__dirname, '../results');
        await fs.ensureDir(resultsDir);
        
        const metricsPath = path.join(resultsDir, 'dashboard-metrics.json');
        await fs.writeJson(metricsPath, metricsData);
      }
      
      console.log('📊 Métricas salvas:', metricsData);
    } catch (error) {
      console.error('❌ Erro ao salvar métricas:', error);
    }
  }

  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 80px;
      right: 20px;
      background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
      color: white;
      padding: 10px 15px;
      border-radius: 4px;
      z-index: 10000;
      animation: slideIn 0.3s ease-out;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Remover após 3 segundos
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
}

// Inicializar dashboard quando a página carregar
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new TestDashboard();
  });
} else {
  new TestDashboard();
}

// Adicionar estilos CSS para animações
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);

// Exportar para uso em outros arquivos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TestDashboard;
}
