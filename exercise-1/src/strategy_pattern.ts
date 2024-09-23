// Behavioral Design Pattern
interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid $${amount} using Credit Card`);
  }
}

class PhonePePayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid $${amount} using PhonePe`);
  }
}

class ShoppingCart {
  private amount: number = 0;
  private paymentStrategy: PaymentStrategy | null = null;

  setPaymentStrategy(paymentStrategy: PaymentStrategy): void {
    this.paymentStrategy = paymentStrategy;
  }

  checkout(): void {
    if (this.paymentStrategy) {
      this.paymentStrategy.pay(this.amount);
    } else {
      console.log('No payment strategy set');
    }
  }

  setAmount(amount: number): void {
    this.amount = amount;
  }
}

// Usage
const cart = new ShoppingCart();
cart.setAmount(100);

cart.setPaymentStrategy(new CreditCardPayment());
cart.checkout();

cart.setPaymentStrategy(new PhonePePayment());
cart.checkout();
