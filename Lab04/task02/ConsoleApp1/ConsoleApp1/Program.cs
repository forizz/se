using System;
using ConsoleApp1;

class Program
{
    static void Main()
    {
        var runway1 = new Runway();
        var runway2 = new Runway();

        var commandCentre = new CommandCentre(runway1, runway2);

        var aircraft1 = new Aircraft("Boeing 737", commandCentre);
        var aircraft2 = new Aircraft("Airbus A320", commandCentre);
        var aircraft3 = new Aircraft("Cessna 172", commandCentre);

        aircraft1.Land();
        aircraft2.Land();
        aircraft3.Land();

        aircraft1.TakeOff();
        aircraft3.Land();
    }
}