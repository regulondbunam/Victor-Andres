import md2json from "md-2-json";

export const FormatDataMenu = (data) => {
  let dataMenu = data.__type.fields;

  let dataWithOutMD = [];

  for (let i = 0; i < dataMenu.length; i++) {
    let descrip = dataMenu[i].description.replace(/#+/g, "#");
    let DataMDtoObj = md2json.parse(descrip);
    dataWithOutMD.push(DataMDtoObj);
  }

  let menuData = {};
  dataWithOutMD.forEach((x) => {
    if (!menuData.hasOwnProperty(clean(x.Type.raw))) {
      menuData[clean(x.Type.raw)] = {};
    }

    if (!menuData[clean(x.Type.raw)].hasOwnProperty([clean(x.Service.raw)])) {
      menuData[clean(x.Type.raw)][clean(x.Service.raw)] = [];
    }

    menuData[clean(x.Type.raw)][clean(x.Service.raw)].push({
      Nombre: clean(x.Name.raw),
      Descripcion: clean(x.Description.raw),
    });
  });

  return menuData;
};

function clean(str) {
  var str2 = str.replace(/\n|\r/g, "");
  return str2;
}
