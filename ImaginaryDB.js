export default function ImaginaryDB({ port, host }) {
  const tables = {
    movies: [{
      "id": 1,
      "name": "Ellswerth",
      "actors": ['Mary Jane', 'Pamela Anderson', 'Tio Mingo'],
      "gender": "Gevee",
      "createdAt": "8/29/2020"
    }, {
      "id": 2,
      "name": "Courtenay",
      "actors": ['Mary Jane', 'Pamela Anderson', 'Tio Mingo'],
      "gender": "Dynabox",
      "createdAt": "12/17/2020"
    }, {
      "id": 3,
      "name": "Gilly",
      "actors": ['Mary Jane', 'Pamela Anderson', 'Tio Mingo'],
      "gender": "Ailane",
      "createdAt": "5/4/2021"
    }, {
      "id": 4,
      "name": "Seymour",
      "actors": ['Mary Jane', 'Pamela Anderson', 'Tio Mingo'],
      "gender": "Oba",
      "createdAt": "1/24/2021"
    }, {
      "id": 5,
      "name": "Finn",
      "actors": ['Mary Jane', 'Pamela Anderson', 'Tio Mingo'],
      "gender": "Vidoo",
      "createdAt": "11/30/2020"
    }, {
      "id": 6,
      "name": "Elyse",
      "actors": ['Mary Jane', 'Pamela Anderson', 'Tio Mingo'],
      "gender": "Tazz",
      "createdAt": "2/17/2021"
    }, {
      "id": 7,
      "name": "Laural",
      "actors": ['Mary Jane', 'Pamela Anderson', 'Tio Mingo'],
      "gender": "Eabox",
      "createdAt": "7/11/2021"
    }, {
      "id": 8,
      "name": "Ashlie",
      "actors": ['Mary Jane', 'Pamela Anderson', 'Tio Mingo'],
      "gender": "Latz",
      "createdAt": "4/2/2021"
    }, {
      "id": 9,
      "name": "Heida",
      "actors": ['Mary Jane', 'Pamela Anderson', 'Tio Mingo'],
      "gender": "Dabvine",
      "createdAt": "7/8/2021"
    }, {
      "id": 10,
      "name": "Mercy",
      "actors": ['Mary Jane', 'Pamela Anderson', 'Tio Mingo'],
      "gender": "Oloo",
      "createdAt": "2/13/2021"
    }, {
      "id": 11,
      "name": "Emlen",
      "actors": ['Mary Jane', 'Pamela Anderson', 'Tio Mingo'],
      "gender": "Photospace",
      "createdAt": "3/15/2021"
    }, {
      "id": 12,
      "name": "Fin",
      "actors": ['Mary Jane', 'Pamela Anderson', 'Tio Mingo'],
      "gender": "Thoughtmix",
      "createdAt": "7/2/2021"
    }, {
      "id": 13,
      "name": "Say",
      "actors": ['Mary Jane', 'Pamela Anderson', 'Tio Mingo'],
      "gender": "Skajo",
      "createdAt": "9/27/2020"
    }, {
      "id": 14,
      "name": "Alva",
      "actors": ['Mary Jane', 'Pamela Anderson', 'Tio Mingo'],
      "gender": "Dynava",
      "createdAt": "7/28/2020"
    }, {
      "id": 15,
      "name": "Lilian",
      "actors": ['Mary Jane', 'Pamela Anderson', 'Tio Mingo'],
      "gender": "Mynte",
      "createdAt": "9/14/2020"
    }, {
      "id": 16,
      "name": "Dolley",
      "actors": ['Mary Jane', 'Pamela Anderson', 'Tio Mingo'],
      "gender": "Tagchat",
      "createdAt": "8/25/2020"
    }, {
      "id": 17,
      "name": "Lee",
      "actors": ['Mary Jane', 'Pamela Anderson', 'Tio Mingo'],
      "gender": "Oyoloo",
      "createdAt": "7/2/2021"
    }, {
      "id": 18,
      "name": "Sherri",
      "actors": ['Mary Jane', 'Pamela Anderson', 'Tio Mingo'],
      "gender": "Kayveo",
      "createdAt": "3/22/2021"
    }, {
      "id": 19,
      "name": "Isabel",
      "actors": ['Mary Jane', 'Pamela Anderson', 'Tio Mingo'],
      "gender": "Minyx",
      "createdAt": "10/30/2020"
    }, {
      "id": 20,
      "name": "Sarene",
      "actors": ['Mary Jane', 'Pamela Anderson', 'Tio Mingo'],
      "gender": "Yombu",
      "createdAt": "1/4/2021"
    }, {
      "id": 21,
      "name": "Calley",
      "actors": ['Mary Jane', 'Pamela Anderson', 'Tio Mingo'],
      "gender": "Browsecat",
      "createdAt": "9/10/2020"
    }, {
      "id": 22,
      "name": "Nanine",
      "actors": ['Mary Jane', 'Pamela Anderson', 'Tio Mingo'],
      "gender": "Brightbean",
      "createdAt": "7/5/2021"
    }, {
      "id": 23,
      "name": "Issiah",
      "actors": ['Mary Jane', 'Pamela Anderson', 'Tio Mingo'],
      "gender": "Divavu",
      "createdAt": "1/8/2021"
    }, {
      "id": 24,
      "name": "Josias",
      "actors": ['Mary Jane', 'Pamela Anderson', 'Tio Mingo'],
      "gender": "Skinix",
      "createdAt": "7/9/2021"
    }]
  }

  return {
    table: tableName => tables[tableName]
  }
}

export const generateId = () => Math.floor(Math.random() * 1000)
