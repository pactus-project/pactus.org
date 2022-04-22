<template>
  <div class="hexdump">
  <span v-html="hex"></span>
  </div>
</template>

<script lang="ts">
var zero = function (n, max) {
  n = n.toString(16).toUpperCase();
  while (n.length < max) {
    n = '0' + n;
  }
  return n;
}

var render = function (buffer) {
  var rows = Math.ceil(buffer.length / 16);
  var last = buffer.length % 16 || 16;
  var offsetLength = buffer.length.toString(16).length;
  if (offsetLength < 6) offsetLength = 6;

  var str = '';
  var i = 0;
  var b = 0;
  var lastBytes;
  var lastSpaces;
  var v;

  for (i = 0; i < rows; i++) {
    str += '<span class="offset">' + zero(b, offsetLength) + '&nbsp;</span>';
    lastBytes = i === rows - 1 ? last : 16;
    lastSpaces = 16 - lastBytes;

    var j;
    for (j = 0; j < lastBytes; j++) {
      if (b%8 == 0) {
        str += '&nbsp;';
      }
      str += '&nbsp;' + zero(buffer[b], 2);
      b++;
    }

    for (j = 0; j < lastSpaces; j++) {
      str += '&nbsp;&nbsp;&nbsp;';
    }

    b -= lastBytes;
    str += '&nbsp;&nbsp;&nbsp;';
    str += '<span class="ascii">';

    for (j = 0; j < lastBytes; j++) {
      v = buffer[b];
      if (v == 60) {
        str += '&#60;';
      } else {
        str += ((v > 31 && v < 127) || v > 159) ? String.fromCharCode(v) : '.';
      }
      b++;
    }

    str += '</span><br>';
  }

  return str;
}

function hexToBytes(hex) {
  for (var bytes = [], c = 0; c < hex.length; c += 2)
  bytes.push(parseInt(hex.substr(c, 2), 16));
  return bytes;
}

export default {
  props: {
    bytes: { type: String, required: true }
  },
  data() {
    var buf = hexToBytes(this.bytes)
    return {
      hex: render(buf)
    };
  },
  methods: {
  }
};
</script>

<style>
.hexdump {
  font-family: monospace;
  font-size: 12px;
}

.hexdump .offset {
  border-right: 2px solid #708090;
  color: #778899;
}
.hexdump .ascii {
  color: #696969;
}
</style>
