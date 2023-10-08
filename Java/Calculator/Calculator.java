package Calculator;


public class Calculator {
    public static void main(String[] args) {
        if (args.length != 3) {
            System.out.println("Usage: java Calculator <operand1> <operator> <operand2>");
            System.exit(1);
        }

        double operand1 = Double.parseDouble(args[0]);
        double operand2 = Double.parseDouble(args[2]);

        switch (args[1]) {
            case "+":
                System.out.println(operand1 + operand2);
                break;
            case "-":
                System.out.println(operand1 - operand2);
                break;
            case "*":
                System.out.println(operand1 * operand2);
                break;
            case "/":
                System.out.println(operand1 / operand2);
                break;
            default:
                System.out.println("Invalid operator");
        }
    }
}