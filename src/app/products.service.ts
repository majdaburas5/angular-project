import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
constructor() { }
  
  products:product[]=[

    new product(
      '11',
      'BOSS',1,
     205 ,102.50,
      'T-shirt',
      'Regular-fit T-shirt with contrast detail',
      'https://images.hugoboss.com/is/image/boss/hbeu50245195_410_350?$large$=&fit=crop%2C1&align=1%2C1&qlt=80&wid=1500&hei=2275'

    ),
    new product(
      '12',
      'Ck',1,
      180,90,
      'T-shirt',
      'he Iconic Monogram T-Shirt from Calvin Klein Jeans comes in Black colour,',
      'https://cdna.lystit.com/200/250/tr/photos/stand-out/5f89ebaa/calvin-klein-Black-Iconic-Monogram-T-shirt.jpeg',

    ),
    new product(
      '13',
      'TOMMY HILFIGER',1,
      600,300,
      'T-shirt',
      'The most wanted t-shirt in our store',
      'https://shoptommy.scene7.com/is/image/ShopTommy/7849807_475_FNT?wid=547&hei=730&fmt=jpeg&qlt=90%2C0&resMode=trilin&op_usm=0.8%2C1.0%2C6%2C0&iccEmbed=0&op_sharpen=1',

    ),
new product(
'14',
'GANT',1,
300,150,'T-shirt',
'best of the best t-shirt,maded with soft silk',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_zLxPU1GDAnxCbWyzm9_CSUJ-idMteVklgA&usqp=CAU',

),
new product(
'15',
'NAUTICA',1,
400,200,'T-shirt',
'Black t-shirt from the NAUTICA brand. Black short-sleeved t-shirt and round collar, prominent NAUTICA logo',
'https://www.nautica.co.il/pub/media/catalog/product/cache/82acd5018dc36bd4507bcad5faafe971/n/1/n1d00029011-5652.jpg',

),
new product(
'31',
'EA7',1,
550,null,
'Shoes',
'black armani shoes',
'https://www.efootwear.eu/media/catalog/product/cache/image/650x650//0/0/0000200876450_02_ts.jpg'

),
new product(
'32',
'Philip plein',1,
2200,null,
'Shoes',
'an expensive Philip plein shoes but very nice style',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSc0hHuN3TZKH22rNwZecaXr28_f6N4gyPrw&usqp=CAU'
),
new product(
  '33',
  'Lacoste',1,
  650,null,
  'T-shirt',
  'white lacoste t-shirt',
  'https://lac-sk.akinoncdn.com/products/2020/11/03/135060/bdbc1401-af7d-4af0-a94a-b1d02003733d_size2000x2000_cropCenter.jpg'
),
new product(
  '34',
  'Tommy Hilfiger',1,
  550,null,
  'T-shirt',
  'A nice looking Tommy T-shirt',
  'https://pa.namshicdn.com/product/A8/03988W/1-web-desktop-list.jpg'

),

new product(
  '35',
  'craiser jeans',1,
  640,null,
  'jeans',
  'supper skinny jeans',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVSZLlJMEhSzCm1CN4_fE7FCFm8MA5q8UNfw&usqp=CAU'

),
 

new product(
  '45',
  'BOSS',1,
   197.90,null,
   'T-shirt',
   'Short-sleeved t-shirt, from the BOSS collection. The chest is decorated with the logo of BOSS and HUGO BOSS',
   'https://www.mousoulis.com/images/products/1600692885-72319600.jpg'


),
new product(
'46',
'Craiser',1,
199.00,null,
'T-shirt',
'Black t-shirt with white logo',
'https://www.mesinio.co.il/wp-content/uploads/2021/03/1010BW-3.jpg'
),
new product(
'47',
'Karl Lagerfeld',1,
352.44,null,
'T-shirt',
'A random t-shirt with Karl logo',
'https://www.karl.com/12/12052472JN_14_r.jpg'
),
new product(
'48',
'BALR.',1,
650,null,
'T-shirt',
'the most the special t-shirt in the store',
'https://brandsforyou.co.il/wp-content/uploads/2021/05/DSCF9186.jpg'

),
new product(
'49',
'LACOSTE',1,
150,null,
'T-shirt',
'black t-shirt with green lacoste logo',
'https://brandsforyou.co.il/wp-content/uploads/2020/09/%D7%9C%D7%A7%D7%95%D7%A1%D7%98-%D7%A9%D7%97%D7%95%D7%A8%D7%94-%D7%94%D7%93%D7%A4%D7%A1-%D7%99%D7%A8%D7%95%D7%A7.jpg'
),
 
new product(
'81',
'ALberto dinero',1,
350,null,
'Shoes',
'a nice looking white shoes ',
'https://i.imgur.com/A8Wwh99.jpg'



),
new product(
  '82',
  'ALberto dinero',1,
  280.90,null,
  'Shoes',
  'a nice looking white shoes',
  'https://i.imgur.com/Cw8PpMO.jpg'

),
new product(
'83',
'ALberto dinero',1,
410,null,
'Shoes',
'Low-top trainers in mesh with rubberised trims',
'https://i.imgur.com/CyHJR8t.jpg'

),
new product( 
'84',
'ALberto dinero',1,
340,null,
'Shoes',
'Low-top trainers in mesh with rubberised trims',
'https://i.imgur.com/Ee6VONG.jpg'
),
new product(
  '85',
  'ALberto dinero',1,
  255,null,
  'Shoes',
  'Hybrid trainers in nylon, mesh and leather',
  'https://i.imgur.com/Y1CV6i0.jpg'
),
new product(
'91',
'Craiser Jeans',1,
489.00,null,
'jeans',
'POPINA flex blue black jeans ',
'https://craiserpro-online.co.il/wp-content/uploads/2021/02/%D7%A4%D7%95%D7%A4%D7%99%D7%A0%D7%94-1.jpg'

),
new product(
  '92',
  'Craiser Jeans',1,
  489.00,null,
  'jeans',
  'ANDROS black jeans ',
  'https://craiserpro-online.co.il/wp-content/uploads/2021/02/%D7%90%D7%A0%D7%93%D7%95%D7%A8%D7%A1-1.jpg'
),
new product(
  '93',
  'Pull and Bear',1,
  199.00,null,
  'jeans',
  'Skinny fit jeans with ripped legs ',
  'https://static.pullandbear.net/2/photos//2021/V/0/2/p/4685/706/406/4685706406_2_1_8.jpg?t=1615215404015&imwidth=750'
),
new product(
'94',
'Renuar',1,
299.90,null,
'jeans',
'Slim Madok Top Jeans ',
'https://www.renuar.co.il/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/4/2/421453203-1.jpg'

),
new product(
  '95',
  'Eleven Four',1,
  450,null,
  'jeans',
  'Berlin model jeans 2006 blue-black tears collection 2020 ',
  'https://efjeans.store/wp-content/uploads/2020/06/GUY_6048-rotated.jpg'
),
new product(
  '61',
  'Gant',1,
  120,null,
  'accessories',
  'Gant Twill Men cap ',
  'https://internetfusion.imgix.net/1220943.jpg?auto=format,compress&cs=srgb&fit=fill&fill=solid&w=600&h=600'
),
new product(
'62',
'TED BAKER',1,
333,null,
'accessories',
'Ted Baker Sutton men sunglasses ',
'https://internetfusion.imgix.net/1323352.jpg?auto=format,compress&cs=srgb&fit=fill&fill=solid&w=600&h=600'

),
new product(
  '63',
  'TOMMY HILFIGER',1,
  404,null,
  'accessories',
  ' Tommy Hilfiger mens bag. Breeze through any daily commute or weekend jaunt with our signature backpack',
  'https://shoptommy.scene7.com/is/image/ShopTommy/AM07575_400_FNT?wid=672&hei=896&fmt=jpeg&qlt=90%2c0&resMode=trilin&op_usm=0.8%2c1.0%2c6%2c0&iccEmbed=0&op_sharpen=1'
  
),
new product(
  '64',
  'LOUIS VUITTON',1,
  2635,null,
  'accessories',
  ' LVXNBA LV INITIALES 40MM REVERSIBLE BELT',
  'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lvxnba-lv-initiales-40mm-reversible-belt-belts--MP298T_PM2_Front%20view.png?wid=656&hei=656'
),
new product(
  '65',
  'TOMMY HILFIGER',1,
  168,null,
  'accessories',
  ' STRIPE SILK BOW TIE',
  'https://shoptommy.scene7.com/is/image/ShopTommy/TT08373_970_FNT?wid=672&hei=896&fmt=jpeg&qlt=90%2c0&resMode=trilin&op_usm=0.8%2c1.0%2c6%2c0&iccEmbed=0&op_sharpen=1'
),
 ]
 
getAllProducts(){
  return this.products
}



getNewProduct(){
  return[
    new product(
      '31',
      'EA7',1,
      550,null,
      'Shoes',
      'black armani shoes',
      'https://www.efootwear.eu/media/catalog/product/cache/image/650x650//0/0/0000200876450_02_ts.jpg'
      
      ),
      new product(
      '32',
      'Philip plein',1,
      2200,null,
      'shoes',
      'an expensive Philip plein shoes but very nice style',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSc0hHuN3TZKH22rNwZecaXr28_f6N4gyPrw&usqp=CAU'
      ),
      new product(
        '33',
        'Lacoste',1,
        650,null,
        'T-shirt',
        'white lacoste t-shirt',
        'https://lac-sk.akinoncdn.com/products/2020/11/03/135060/bdbc1401-af7d-4af0-a94a-b1d02003733d_size2000x2000_cropCenter.jpg'
      ),
      new product(
        '34',
        'Tommy Hilfiger',1,
        550,null,
        'T-shirt',
        'A nice looking Tommy T-shirt',
        'https://pa.namshicdn.com/product/A8/03988W/1-web-desktop-list.jpg'
      
      ),
      
      new product(
        '35',
        'craiser jeans',1,
        640,null,
        'jeans',
        'supper skinny jeans',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVSZLlJMEhSzCm1CN4_fE7FCFm8MA5q8UNfw&usqp=CAU'
      
        
      ),
      
  ]
}
 
  getProduct(){
    return[
      new product(
        '11',
        'BOSS',1,
       205 ,102.50,
        'T-shirt',
        'Regular-fit T-shirt with contrast detail',
        'https://images.hugoboss.com/is/image/boss/hbeu50245195_410_350?$large$=&fit=crop%2C1&align=1%2C1&qlt=80&wid=1500&hei=2275'

      ),
      new product(
        '12',
        'Ck',1,
        180,90,
        'T-shirt',
        'he Iconic Monogram T-Shirt from Calvin Klein Jeans comes in Black colour,',
        'https://cdna.lystit.com/200/250/tr/photos/stand-out/5f89ebaa/calvin-klein-Black-Iconic-Monogram-T-shirt.jpeg',

      ),
      new product(
        '13',
        'TOMMY HILFIGER',
        1,
        600,300,
        'T-shirt',
        'The most wanted t-shirt in our store',
        'https://shoptommy.scene7.com/is/image/ShopTommy/7849807_475_FNT?wid=547&hei=730&fmt=jpeg&qlt=90%2C0&resMode=trilin&op_usm=0.8%2C1.0%2C6%2C0&iccEmbed=0&op_sharpen=1',

      ),
new product(
'14',
'GANT',
1,
300,150,
'T-shirt',
'best of the best t-shirt,maded with soft silk',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_zLxPU1GDAnxCbWyzm9_CSUJ-idMteVklgA&usqp=CAU',

),
new product(
  '15',
  'NAUTICA',
  1,
  400,200,
  'T-shirt',
  'Black t-shirt from the NAUTICA brand. Black short-sleeved t-shirt and round collar, prominent NAUTICA logo',
  'https://www.nautica.co.il/pub/media/catalog/product/cache/82acd5018dc36bd4507bcad5faafe971/n/1/n1d00029011-5652.jpg',

),

  ]
 

  }
  }
    

    



      class product{
        SerialNumber:string;
        name:string;
        qnt:number
        price:number;
        discount:number;
        category:string;
         description:string;
        img:string;
        
       
        

        constructor(
          SerialNumber:string,
          name:string,
          qnt:number,
          price:number,
          discount:number,
          category:string,
          description:string,
          img:string,
         
          
        ){
          this.SerialNumber=SerialNumber;
          this.name=name;
          this.qnt=qnt;
          this.price=price;
          this.discount=discount;
          this.category=category;
          this.description=description;
          this.img=img;
         
}
  


        }
        
      
  
