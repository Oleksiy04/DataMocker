// data-mocker.js

class DataMocker {
    constructor(schema) {
      this.schema = schema;
    }
  
    generate() {
      const result = {};
      for (const key in this.schema) {
        if (this.schema.hasOwnProperty(key)) {
          result[key] = this._generateField(this.schema[key]);
        }
      }
      return result;
    }
  
    _generateField(fieldSchema) {
      switch (fieldSchema.type) {
        case 'string':
          return this._generateString(fieldSchema);
        case 'number':
          return this._generateNumber(fieldSchema);
        case 'boolean':
          return this._generateBoolean();
        case 'array':
          return this._generateArray(fieldSchema);
        default:
          throw new Error(`Unsupported field type: ${fieldSchema.type}`);
      }
    }
  
    _generateString({ length = 10 }) {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return result;
    }
  
    _generateNumber({ min = 0, max = 100 }) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    _generateBoolean() {
      return Math.random() >= 0.5;
    }
  
    _generateArray({ itemSchema, length = 5 }) {
      const result = [];
      for (let i = 0; i < length; i++) {
        result.push(this._generateField(itemSchema));
      }
      return result;
    }
  }
  
  // Example usage
  if (require.main === module) {
    const schema = {
      name: { type: 'string', length: 8 },
      age: { type: 'number', min: 18, max: 60 },
      isActive: { type: 'boolean' },
      tags: { type: 'array', itemSchema: { type: 'string', length: 5 }, length: 3 },
    };
  
    const mocker = new DataMocker(schema);
    console.log(mocker.generate());
  }
  
  module.exports = DataMocker;
  