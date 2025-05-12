<script lang="ts">
  import { onMount } from 'svelte';
  
  let displayValue = '0';
  let firstOperand: number | null = null;
  let waitingForSecondOperand = false;
  let operator: string | null = null;
  
  function updateDisplay() {
    displayValue = displayValue;
  }
  
  function inputDigit(digit: string) {
    if (waitingForSecondOperand) {
      displayValue = digit;
      waitingForSecondOperand = false;
    } else {
      displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
  }
  
  function inputDecimal() {
    if (waitingForSecondOperand) {
      displayValue = '0.';
      waitingForSecondOperand = false;
      return;
    }
    
    if (!displayValue.includes('.')) {
      displayValue += '.';
    }
  }
  
  function handleOperator(nextOperator: string) {
    const inputValue = parseFloat(displayValue);
    
    if (operator && waitingForSecondOperand) {
      operator = nextOperator;
      return;
    }
    
    if (firstOperand === null) {
      firstOperand = inputValue;
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      displayValue = `${parseFloat(result.toFixed(7))}`;
      firstOperand = result;
    }
    
    waitingForSecondOperand = true;
    operator = nextOperator;
  }
  
  function calculate(firstOperand: number, secondOperand: number, operator: string): number {
    switch (operator) {
      case 'add':
        return firstOperand + secondOperand;
      case 'subtract':
        return firstOperand - secondOperand;
      case 'multiply':
        return firstOperand * secondOperand;
      case 'divide':
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  }
  
  function resetCalculator() {
    displayValue = '0';
    firstOperand = null;
    waitingForSecondOperand = false;
    operator = null;
  }
  
  function deleteLastDigit() {
    if (displayValue.length === 1) {
      displayValue = '0';
    } else {
      displayValue = displayValue.slice(0, -1);
    }
  }
  
  function handleKeyClick(action: string | null, value: string | null) {
    if (value !== null) {
      inputDigit(value);
    } else if (action === 'decimal') {
      inputDecimal();
    } else if (action === 'clear') {
      resetCalculator();
    } else if (action === 'delete') {
      deleteLastDigit();
    } else if (action === 'equal') {
      if (!operator) return;
      
      const inputValue = parseFloat(displayValue);
      const result = calculate(firstOperand!, inputValue, operator);
      displayValue = `${parseFloat(result.toFixed(7))}`;
      firstOperand = result;
      waitingForSecondOperand = true;
      operator = null;
    } else if (action) {
      handleOperator(action);
    }
  }
</script>

<svelte:head>
  <title>Calcolatrice - App Demo</title>
  <meta name="description" content="Una semplice calcolatrice con operazioni di base">
</svelte:head>

<!-- Hero Section -->
<section class="hero">
  <div class="container">
    <h1>Calcolatrice</h1>
    <p>Una semplice calcolatrice con operazioni di base</p>
  </div>
</section>

<!-- App Demo -->
<section>
  <div class="container">
    <div class="calculator">
      <div class="calculator-display">{displayValue}</div>
      <div class="calculator-keys">
        <button class="calculator-key key-clear" on:click={() => handleKeyClick('clear', null)}>C</button>
        <button class="calculator-key key-operator" on:click={() => handleKeyClick('divide', null)}>÷</button>
        <button class="calculator-key key-operator" on:click={() => handleKeyClick('multiply', null)}>×</button>
        <button class="calculator-key key-operator" on:click={() => handleKeyClick('subtract', null)}>-</button>
        <button class="calculator-key" on:click={() => handleKeyClick(null, '7')}>7</button>
        <button class="calculator-key" on:click={() => handleKeyClick(null, '8')}>8</button>
        <button class="calculator-key" on:click={() => handleKeyClick(null, '9')}>9</button>
        <button class="calculator-key key-operator" on:click={() => handleKeyClick('add', null)}>+</button>
        <button class="calculator-key" on:click={() => handleKeyClick(null, '4')}>4</button>
        <button class="calculator-key" on:click={() => handleKeyClick(null, '5')}>5</button>
        <button class="calculator-key" on:click={() => handleKeyClick(null, '6')}>6</button>
        <button class="calculator-key" on:click={() => handleKeyClick(null, '1')}>1</button>
        <button class="calculator-key" on:click={() => handleKeyClick(null, '2')}>2</button>
        <button class="calculator-key" on:click={() => handleKeyClick(null, '3')}>3</button>
        <button class="calculator-key key-equal" on:click={() => handleKeyClick('equal', null)}>=</button>
        <button class="calculator-key" on:click={() => handleKeyClick(null, '0')}>0</button>
        <button class="calculator-key" on:click={() => handleKeyClick('decimal', null)}>.</button>
        <button class="calculator-key" on:click={() => handleKeyClick('delete', null)}>⌫</button>
      </div>
    </div>
    
    <div class="app-description">
      <h3>Come funziona</h3>
      <p>Questa calcolatrice è stata implementata utilizzando Svelte e TypeScript. Supporta le operazioni di base (addizione, sottrazione, moltiplicazione, divisione) e include funzionalità come cancellazione e gestione dei decimali.</p>
      <p>Il codice sorgente è disponibile su <a href="https://github.com/scavone87/scavone87.github.io/tree/main/frontend/src/routes/apps/calcolatrice" target="_blank">GitHub</a>.</p>
    </div>
  </div>
</section>

<style>
  .calculator {
    max-width: 300px;
    margin: 0 auto;
    background-color: var(--card-bg);
    border-radius: 10px;
    box-shadow: var(--box-shadow);
    overflow: hidden;
  }
  
  .calculator-display {
    background-color: var(--primary-dark);
    color: white;
    text-align: right;
    padding: 20px;
    font-size: 24px;
    font-family: monospace;
  }
  
  .calculator-keys {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1px;
    background-color: var(--border-color);
  }
  
  .calculator-key {
    background-color: var(--surface-color);
    color: var(--text-color);
    border: none;
    padding: 20px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .calculator-key:hover {
    background-color: var(--hover-bg);
  }
  
  .key-operator {
    background-color: var(--light-gray);
    color: var(--text-color);
  }
  
  .key-equal {
    background-color: var(--primary-color);
    color: white;
    grid-column: -2;
    grid-row: 2 / span 4;
  }
  
  .key-equal:hover {
    background-color: var(--accent-color);
  }
  
  .key-clear {
    background-color: var(--accent-color);
    color: white;
  }
  
  .key-clear:hover {
    background-color: var(--accent-dark);
  }
  
  .app-description {
    max-width: 600px;
    margin: 2rem auto;
    padding: 1rem;
    background-color: var(--light-gray);
    border-radius: 8px;
  }
  
  .hero {
    padding: 2rem 0;
  }
</style>
