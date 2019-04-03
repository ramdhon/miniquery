class SweetSelector {
  static select(obj) {
    switch(obj[0]) {
      case '#':
        return document.getElementById(obj.slice(1));

      case '.':
        return document.getElementsByClassName(obj.slice(1));

      default:
        return document.getElementsByTagName(obj);
    }
  }
}

class DOM { 
  static hide(obj) {
    SweetSelector.select(obj).style.visibility = 'hidden';
  }

  static show(obj) {
    SweetSelector.select(obj).style.visibility = 'visible';
  }

  static addClass(cls1, cls2) {
    let divs = SweetSelector.select(cls1);
    if (divs.length) {
      for (let div of divs) {
        div.classList.add(cls2);
      }
    } else {
      divs.classList.add(cls2);
    }
  }

  static removeClass(cls1, cls2) {
    let divs = SweetSelector.select(cls1);
    if (divs.length) {
      for (let div of divs) {
        div.classList.remove(cls2);
      }
    } else {
      divs.classList.remove(cls2);
    }
  }
}