function landMass(name, area) {
    //Implementación
    const lMass = 148940000;
    const percent = area / lMass * 100
    const a = percent.toFixed(2);
    const rounded = Math.round((percent + Number.EPSILON) * 100) / 100;
  
    return {
      percent: rounded,
      message: `${name} representa el ${rounded}% de la masa de la tierra`,
    };
  }
  
  module.exports = landMass;