class Strategy {
   execute() {
     throw new Error('La méthode execute() doit être implémentée');
   }
 }
 class ConcreteStrategyA extends Strategy {
   execute() {
     return 'Résultat de la stratégie A';
   }
 }
 
 class ConcreteStrategyB extends Strategy {
   execute() {
     return 'Résultat de la stratégie B';
   }
 }
 class Context {
   constructor(strategy) {
     this.strategy = strategy;
   }
 
   setStrategy(strategy) {
     this.strategy = strategy;
   }
 
   executeStrategy() {
     return this.strategy.execute();
   }
 }
 const context = new Context(new ConcreteStrategyA());
 console.log(context.executeStrategy()); // Résultat de la stratégie A
 
 context.setStrategy(new ConcreteStrategyB());
 console.log(context.executeStrategy()); // Résultat de la stratégie B