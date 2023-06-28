export function convertArrayToObj(arr) {
  let obj = {};
  try {
    if (typeof arr == 'object') {
      return arr;
    } else if (typeof arr != 'undefined' && arr.length > 0) {
      obj = Object.fromEntries(arr.map(item => [item.key, item.value]));
    }
  } catch (error) {
    console.log('error for Array to Object Convert', error);
  }
  return obj;
}

export function findLabelStyle(style) {
  let newStyle = {};
  try {
    if (style) {
      let obj = convertArrayToObj(style);
      if (typeof obj == 'object') {
        if (obj.color) {
          newStyle.color = obj.color;
        }
        if (obj.fontSize) {
          newStyle.fontSize = obj.fontSize;
        }
        if (obj.fontFamily) {
          newStyle.fontFamily = obj.fontFamily;
        }
        if (obj.fontWeight) {
          newStyle.fontWeight = obj.fontWeight;
        }
        if (obj.textAlign) {
          newStyle.textAlign = obj.textAlign;
        }
        if (obj.textAlignVertical) {
          newStyle.textAlignVertical = obj.textAlignVertical;
        }
      }
    }
  } catch (err) {
    console.log('LabelStyle error', err);
  }
  return newStyle;
}

export function findButtonStyle(style) {
  let newObj = {};
  if (style) {
    let obj = convertArrayToObj(style);
    if (obj.width) {
      newObj.width = '100%';
    }
    if (obj.height) {
      newObj.height = '100%';
    }
    if (obj.minWidth) {
      newObj.minWidth = obj.minWidth;
    }
    if (obj.maxWidth) {
      newObj.minWidth = obj.minWidth;
    }
    if (obj.minHeight) {
      newObj.minHeight = obj.minHeight;
    }
    if (obj.maxHeight) {
      newObj.minHeight = obj.minHeight;
    }
    if (obj.borderRadius) {
      newObj.borderRadius = obj.borderRadius;
    }
    if (obj.borderColor) {
      newObj.borderColor = obj.borderColor;
    }
  }
}

export function findContainerStyle(style) {
  let newObj = {};
  if (style) {
    let obj = convertArrayToObj(style);
    if (obj.width) {
      newObj.width = obj.width;
    }
    if (obj.height) {
      newObj.height = obj.height;
    }
  }
  return newObj;
}
