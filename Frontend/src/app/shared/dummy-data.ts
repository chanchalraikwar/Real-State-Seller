import { Property } from './interface/property';
import { PropertyType, TransactionType  } from './enums/property';
import { Enquiry } from './interface/enquiry';
import { EnquiryTopic } from './enums/enquiry';

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation
  ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit
  in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat
  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const shortText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor`;
const address1 = `BC-12 street. 45 gssto odio dignissimos ducimus 546-43-443 puos dolores et quas`;
const address2 = `Road 34-43-45 gssto DDT dignissimos duc. Visit dolores et quas`;

const images1 = [
  'https://ik.imagekit.io/wr5lnrww0q8/REM_Folder/wall-1_1__cOWZPcFLtf.jpg',
  'https://ik.imagekit.io/wr5lnrww0q8/REM_Folder/bedroom-1_1__vaf0icwViPQ.jpg',
  'https://ik.imagekit.io/wr5lnrww0q8/REM_Folder/kitchen-1_1__ydLwMBXTp.jpg',
  '' , ''
];
export const users = {};

export const enquiries: Enquiry[] = [
  {
    content: longText,
    email: 'test@email.com',
    enquiry_id: '01',
    date: new Date('2021/3/3'),
    title: 'Sed ut perspiciatis unde omnis iste?',
    topic: EnquiryTopic.schedule,
    read: true,
    property: {
      name: 'Homemaker Grande A',
       property_id: '01',
    },
  },
  {
    content: longText,
    email: 'naruto_uzumaki34@email.com',
    enquiry_id: '02',
    date: new Date('2021/4/3'),
    title: 'illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    topic: EnquiryTopic.payment,
    read: false,
    property: {
      name: 'The Glass Grande Maison B',
      property_id: '02',
    },
  },
  {
    content: longText,
    email: 'naruto_uzumaki34@email.com',
    enquiry_id: '03',
    date: new Date('2021/7/13'),
    title: 'Lorem ipsum dolor sit amet, consectetur!!!',
    topic: EnquiryTopic.info,
    read: false,
    property: {
      name: 'La Grande Maison Certy C',
      property_id: '03',
    },
    users: {
      from: {
        user_id: '01',
        keep: true,
      },
      to: {
        user_id: '03',
        keep: true,
      },
    },
  },
  {
    content: longText,
    email: 'monkey_luffy12@email.com',
    enquiry_id: '04',
    date: new Date('2021/7/5'),
    title: 'Duis aute irure dolor in reprehenderit in voluptate?',
    topic: EnquiryTopic.sales,
    read: true,
    property: {
      name: 'Green Planes 45 E Lorem ipsum',
      property_id: '05',
    },
  },
];

export const properties: Property[] = [
  {
    property_id: '01',
    address: address1,
    description: longText,
    name: 'Homemaker Grande A',
    type: PropertyType.residential,
    transactionType: TransactionType.forSale,
    position: {
      lat: 8.948677279926585,
      lng: 125.5470567303216,
    },
    price: 210000,
    images: images1,
    updatedAt: new Date(),
    enquiries: ['12'],
    currency: 'PHP',
    features: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    user_id: '01',
  },
  {
    property_id: '02',
    address: address2,
    description: longText,
    name: 'The Glass Grande Maison B',
    type: PropertyType.commercial,
     transactionType: TransactionType.forSale,
    position: {
      lat: 8.948603092201049,
      lng: 125.54424652989282,
    },
    updatedAt: new Date(),
    enquiries: [],
    price: 50000,
    images: images1,
    currency: 'PHP',
    features: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
      'Item 5',
      'Item 6',
      'Item 7',
      'Item 8',
    ],
    user_id: '0002',
  },
  {
    property_id: '03',
    address: address1,
    description: shortText,
    name: 'La Grande Maison Certy C',
    type: PropertyType.industrial,
     transactionType: TransactionType.forSale,
    position: {
      lat: 8.947998991587234,
      lng: 125.5430559487951,
    },
    price: 30000,
    updatedAt: new Date('2021/08/25'),
    enquiries: ['351'],
    currency: 'PHP',
    features: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
      'Item 5',
      'Item 6',
      'Item 7',
      'Item 8',
    ],
    user_id: '01',
  }
];
