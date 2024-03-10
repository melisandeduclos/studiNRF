// Définition de l’interface commune pour les objets de paiement
class Payment {
   processPayment() {}
 }
 
 // Implémentation de la classe de paiement par carte de crédit
 class CreditCardPayment extends Payment {
   processPayment() {
     console.log("Traitement du paiement par carte de crédit...");
   }
 }
 
 // Implémentation de la classe de paiement par virement bancaire
 class BankTransferPayment extends Payment {
   processPayment() {
     console.log("Traitement du paiement par virement bancaire...");
   }
 }
 
 // Implémentation de la Factory pour créer les objets de paiement
 class PaymentFactory {
   createPayment(paymentType) {
     if (paymentType === "CreditCard") {
       return new CreditCardPayment();
     } else if (paymentType === "BankTransfer") {
       return new BankTransferPayment();
     } else {
       throw new Error("Type de paiement invalide !");
     }
   }
 }
 
 // Utilisation de la Factory pour créer différents types de paiements
 const paymentFactory = new PaymentFactory();
 const creditCardPayment = paymentFactory.createPayment("CreditCard");
 const bankTransferPayment = paymentFactory.createPayment("BankTransfer");
 
 // Utilisation des objets de paiement créés
 creditCardPayment.processPayment(); // Traitement du paiement par carte de crédit...
 bankTransferPayment.processPayment(); // Traitement du paiement par virement bancaire..