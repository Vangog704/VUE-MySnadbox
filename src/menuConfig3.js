import Icons from './assets/icons.json';

export default {
    angle: 180,
    aperture: 360,
    radius: 10,
    btns:[
        {height: 75, title:"QR", icon: Icons.qr, path:'/Qr',
            btns:[
                {height: 75, title:"QR", icon: Icons.qr, path:'/Qr'},
                {height: 75, title:"Pen", icon: Icons.pen},
            ]    
        },
        {height: 50, title:"Pen", icon: Icons.pen,
            btns:[
                {height: 75, title:"QR", icon: Icons.qr, path:'/Qr'},
                {height: 75, title:"Pen", icon: Icons.pen},
            ]
        },
    ]  
}