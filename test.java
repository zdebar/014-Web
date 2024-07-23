public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}

public class Person {
  private String name; // private = restricted access

  // Getter
  public String getName() {
    return name;
  }

  // Setter
  public void setName(String newName) {
    this.name = newName;
  }
}