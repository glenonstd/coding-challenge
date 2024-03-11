class God {
  /**
   * @returns Human[]
   */
  static create() {
    const Adam = new Man("Adam");
    const Eve = new Woman("Eve");

    return [Adam, Eve];
  }
}

class Human {
  constructor(name) {
    this.name = name;
  }
}

class Man extends Human {
  constructor(name) {
    super(name);
  }
}

class Woman extends Human {
  constructor(name) {
    super(name);
  }
}
