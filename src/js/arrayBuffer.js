export default class ArrayBufferConverter {
  load(buffer) {
    this.bufferData = buffer;
  }

  toString() {
    if (!this.bufferData) {
      throw new Error('no data');
    }
    return new TextDecoder('utf-8').decode(this.bufferData);
  }
}
