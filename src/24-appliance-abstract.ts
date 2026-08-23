
abstract class Appliance {
  abstract turnOn(): void;

  turnOff(): void {
    console.log("Thiet bi da tat");
  }
}

class Fan extends Appliance {
  turnOn(): void {
    console.log("Quat da bat");
  }
}

class AirConditioner extends Appliance {
  turnOn(): void {
    console.log("May lanh da bat");
  }
}

const fan1 = new Fan();
const ac1 = new AirConditioner();
fan1.turnOn();
ac1.turnOn();
ac1.turnOff();

export {};
