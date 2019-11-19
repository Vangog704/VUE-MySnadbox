import Icons from './assets/icons.json';

export default {
    angle: 180,
    aperture: 360,
    radius: 50,
    btns:[
        {height: 75, title:"QR", icon: Icons.qr,
            btns:[
                {height: 75, title:"Fire", icon: Icons.fire, path:'/Fire'},
                {height: 75, title:"Pen", icon: Icons.pen},
                {height: 75, title:"Sword", icon: Icons.sword, path:'/Sword'},
            ]    
        },
        {height: 75, title:"Pen", icon: Icons.pen,
            btns:[
                {height: 75, title:"Data", icon: Icons.data, path:'/Data'},
                {height: 75, title:"Fire", icon: Icons.fire},
                {height: 75, title:"Headphone", icon: Icons.headphone, path:'/Headphone'},
            ]
        },
        {height: 75, title:"Zip", icon: Icons.zip,
            btns:[
                {height: 75, title:"Bones", icon: Icons.bones, path:'/Bones'},
                {height: 75, title:"Data", icon: Icons.data},
                {height: 75, title:"QR", icon: Icons.qr, path:'/Qr'},
            ]
        },
    ]  
}