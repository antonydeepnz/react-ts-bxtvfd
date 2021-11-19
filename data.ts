interface IModelMappingDataReturn {
  name: string;
  year: number;
  city: string;
  price: number;
  isNew: boolean;
  isStock: boolean;
  isAction: boolean;
  pictures: string[];
  characteristics: string[];
}

export const modelMappingData = (data): IModelMappingDataReturn => ({
  name: data.equipment.name,
  year: data.year,
  city: data.city,
  price: data.price,
  isNew: data.is_new,
  isStock: data.is_stock,
  isAction: data.is_action,
  pictures: data.equipment.photoUrls,
  characteristics: [
    `${data.equipment.type_fuel.name} ${data.equipment.engine_volume}, ${data.equipment.engine_power} л.с.`,
    data.equipment.transmission.name,
    data.equipment.drive_unit.name,
    data.color.name,
    `${data.options_count} базовых опций`,
    `${data.additional_options_count} доп. опции`,
  ],
});

export const data = {
  uid: '306774cd-c64a-4cf8-9bb0-eb09a7b7e58c',
  equipment: {
    uid: '5fb00b47-beb3-41d7-b366-1c48595aabe3',
    display_name: '3.0D I6 249 PS R-Dynamic SE',
    make: {
      uid: 'a1edb0b6-484c-4bc4-9261-7146aaabfde4',
      name: 'Land Rover',
      country: {
        uid: '36fae1b9-926c-4b4d-8b77-a17c31153a48',
        name: 'Соединенное Королевство Великобритании',
        code: 'GBR',
        short_name: 'СОЕДИНЕННОЕ КОРОЛЕВСТВО',
        country_code: '826',
      },
    },
    model_ts: {
      uid: 'cd334988-a7be-4440-b8da-00da160f930a',
      name: 'Discovery',
      owner: {
        uid: 'a1edb0b6-484c-4bc4-9261-7146aaabfde4',
        name: 'Land Rover',
        country: {
          uid: '36fae1b9-926c-4b4d-8b77-a17c31153a48',
          name: 'Соединенное Королевство Великобритании',
          code: 'GBR',
          short_name: 'СОЕДИНЕННОЕ КОРОЛЕВСТВО',
          country_code: '826',
        },
      },
    },
    name: '3.0D I6 249 PS R-Dynamic SE',
    engine_volume: 2996,
    transmission: {
      uid: 'cf4ac0ac-3f29-1157-d5da-0fd8b733cf1d',
      name: 'автомат',
    },
    engine_power: 249,
    type: {
      uid: '1999ff3b-ad46-4c6f-a2ce-30faaf1be5e8',
      name: 'Легковой автотранспорт',
      parent: null,
      bases: null,
      document_type: {
        sys_name: 'Other',
        name: 'Прочее',
      },
      child_exist: false,
      photoUrl: null,
    },
    subtype1: null,
    subtype2: null,
    body_type: {
      uid: '1ee5cccc-5ee0-4f47-91f6-67e72cbdbde6',
      name: 'внедорожник',
    },
    seats_number: 5,
    brand_country: {
      uid: '36fae1b9-926c-4b4d-8b77-a17c31153a48',
      name: 'Соединенное Королевство Великобритании',
      code: 'GBR',
      short_name: 'СОЕДИНЕННОЕ КОРОЛЕВСТВО',
      country_code: '826',
    },
    category: {
      uid: '6109b828-7484-4312-a81b-b26dab75b490',
      name: 'B',
    },
    type_fuel: {
      uid: '4d4662e7-204e-481c-bb14-4b36637a68a4',
      name: 'Дизельный',
    },
    drive_unit: {
      uid: 'ac30fc70-bb40-914c-3484-ff72ff212d3b',
      name: 'полный',
    },
    curb_weight: 3080,
    depreciation_group: null,
    dimensions: 4956,
    weigth: 2315,
    is_base: false,
    wheel_formula: null,
    mover_type: {
      sys_name: 'Wheeled',
      name: 'Колесный',
    },
    engine_power_kw: 338.5404,
    seat_upholstery: null,
    industry1: null,
    industry2: null,
    industry3: null,
    photoUrls: [
      'https://io.ilsa.ru/catalog/Land+Rover/LR5000699598~20210519.jpg',
    ],
  },
  city: 'Нижний Новгород',
  year: 2021,
  options_count: 0,
  additional_options_count: 0,
  color: {
    key: null,
    name: 'Eiger Grey Metallic',
    code: null,
    base: null,
    hue: null,
    hex: null,
  },
  is_metallic: true,
  picture: [
    'https://io.ilsa.ru/catalog/Land+Rover/LR5000699598~20210519_1DF.jpg',
  ],
  price: 8184925,
  is_new: true,
  is_stock: false,
  is_action: false,
};
