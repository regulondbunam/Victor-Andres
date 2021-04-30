import md2json from "md-2-json";

export const FormatData = (data) => {
  let dataMenu = data.__type.fields;

  let dataWithOutMD = [];

  for (let i = 0; i < dataMenu.length; i++) {
    let descrip = dataMenu[i].description.replace(/#+/g, "#");
    let DataMDtoObj = md2json.parse(descrip);
    dataWithOutMD.push(DataMDtoObj);
  }

  let menuElements = [];

  let contador = 1;
  dataWithOutMD.map((e) => {
    const Type = clean(e.Type.raw);
    const Service = clean(e.Service.raw);
    let objCategory = {
      id: contador,
      title: Type,
      value: Type,
      sons: [],
    };
    if (!objExists(objCategory, menuElements)) {
      menuElements.push(objCategory);
      contador += 1;
    }
  });
  // Segundo Nivel
  contador = 1;
  dataWithOutMD.map((e) => {
    const Type = clean(e.Type.raw);
    const Service = clean(e.Service.raw);
    let objService = {
      id: `${Service}_${contador}`,
      title: Service,
      value: Service,
      sons: [],
    };
    let index = menuElements.findIndex((x) => x.value === Type);

    if (!objExists(objService, menuElements[index].sons)) {
      menuElements[index].sons.push(objService);
      contador += 1;
    }
  });

  // Tercer Nivel
  contador = 1;
  dataWithOutMD.map((e) => {
    const Type = clean(e.Type.raw);
    const Service = clean(e.Service.raw);
    const Name = clean(e.Name.raw);

    let objName = {
      id: `${Type}_${Service}_${contador}`,
      title: Name,
      value: Name,
    };

    let index = menuElements.findIndex((x) => x.value === Type);
    let index2 = menuElements[index].sons.findIndex((x) => x.value === Service);
    if (!objExists(objName, menuElements[index].sons[index2].sons)) {
      menuElements[index].sons[index2].sons.push(objName);
      contador += 1;
    }
  });

  let ServiceData;
  return (ServiceData = { menuElements });
};

function objExists(obj, array) {
  return array.some(function (objData) {
    return objData.title === obj.title;
  });
}

function clean(str) {
  var str2 = str.replace(/\n|\r/g, "");
  return str2;
}
