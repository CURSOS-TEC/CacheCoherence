'use-strict'

import models from "./models";

class InstructorGenerator {
    /**
     * Este constructor recibe como parámetro una función
     * para establecer la distribución
     * tanto de instrucciones como de accesos a memoria.
     * @param {*} iDistribution función para la distribución de probabilidad de las instrucciones
     * @param {*} aDistribution función para la distribución de probabilidad de las direcciones de memoria
     */
    constructor(iDistribution, aDistribution) {
        this.iDistribution = iDistribution;
        this.aDistribution = aDistribution;
        this.seed = Date.now();
    }

    /**
     * Esta función retorna un objeto Instruction con el siguiente formato.
     * {
     *  op: [CALC, READ, WRITE],
     *  value: optional: valor hexadecimal de dós dígitos, se usa sólo para operación de escritura.
     *  address:  dirección que aplica solo cuando la operación es lectura o de escritura
     * }
     */
    generateInstruction() {
        this.seed = Date.now();
        const pseudo_uniform_aux = (mult, mod, seed, size) => {
            const U = Array(size).fill(0);
            let x = (seed * mult + 1) % mod;
            U[0] = x / mod;
            for (let index = 1; index < U.length; index++) {
                x = (x * mult + 1) % mod;
                U[index] = x / mod;
            }
            return U[size - 1];
        }
        const pseudo_uniform = (low, high) => {
            return low + (high - low) * pseudo_uniform_aux(16807, (2 ** 31) - 1, this.seed, 10);
        }
        const instructionTypes = [models.INSTRUCTION_TYPES.CALC, models.INSTRUCTION_TYPES.READ, models.INSTRUCTION_TYPES.WRITE];
        const randomValue = pseudo_uniform(0, 3);
        const result = instructionTypes[Math.floor(randomValue)];
        console.log(result);
        return result;
    }

}
export default InstructorGenerator;