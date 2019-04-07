/*

	CODIGOS
	
	w2pixel
	wRect
	wPoint
	wRadius
	wStroke
	wFill
	wDeform
    wMove
    
    ---02/04----

    w2pixelCanvas
    wClear
	
    ----------------
    ---06/04----

    wPointPath
    wLinePath

    ----------------
	
	class pixel grid
	id w2pixel
	class geometry

	==================================

	by: SAMUELLLR 
	twitter: https://twitter.com/Samuelllr_htcod

	2019 - version : 2.0.0
	
*/

// VARIAVEIS PADROES
var DP = {
	"espTAM" : 400 ,
	"nPixelXy" : 10,
	
	"IDespW2P" : "w2p"
};

// VARIAVEIS

var
    esp ,
    c ,
	espatt1,
	espatt2,
	espatt3,
	
	pixelAP,
	
	pegaIDespW2P,
    mudaIDappendChild,
    
    modSVGCANVAS
;
	
// VARIAVEIS MATEMATICAS
	
var
	pixelTAMx,
	pixelTAMy,
	pixelESPx,
	pixelESPy,
	
	newPointX,
	newPointY,
	
	numberIDespW2P ,
	
	allpixelradius ,
	colorStroke,
	ESPEstroke,
	colorFill,
	
	classXX,
	classYY,
	
	pasteX,
	pasteY,
	moveX,
	moveY,
	
	classpixelX,
	classpixelY,
	
	numnpx,
	numnpy,

	medidaXespace,
	medidaYespace
	
;

// VALORES DE VARIAVEIS MATEMATICAS

	numberIDespW2P = 0 ;
	colorFill= "#000" ;
	pasteX = 0;
	pasteY = 0;
	moveX = 0 ;
    moveY = 0 ;
    modSVGCANVAS = "svg" ;
	
	//valores das var class pixel grid
	
	classpixelX = -1 ;
	classpixelY = 0 ;

//==========================================================================
//FUNCOES ADICIONAIS DE FACILIDADES

function wRadius( rxy ){
	
	allpixelradius = rxy ;
	
}

function wStroke( cor , espe ){
	
	if( cor == false ){
		
		colorStroke = null ;
		ESPEstroke = 0 ;
		
	}
	
	colorStroke = cor ;
	ESPEstroke = espe ;
	
}

function wFill( cor ){
	
	if( colorFill==null ){
		
		colorFill = "#000" ;
		
	}
	
	colorFill = cor ;
	
}

function wDeform( px , py ){
	
	if( px == null ){ px=1 }
	if( px == false ){ px=0;py=0 }
	if( py == null ){ py=1 }
	
	pasteX = px ;
	pasteY = py ;
	
}

function wMove( xx , yy ){
	
	if( xx == null ){
		xx = 0;
	}
	if( xx == false ){
		xx = 0;yy = 0;
	}
	if( yy == null ){
		yy = 0;
	}
	
	moveX = xx ;
	moveY = yy ;
	
}

function wHelpPoints(){
    
    if( modSVGCANVAS == "svg" ){

        //CENTER
        pixelAP = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        pixelAP.setAttributeNS( null, "width", pixelTAMx );
        pixelAP.setAttributeNS( null, "height", pixelTAMy );
        pixelAP.setAttributeNS( null, "fill", "#000" );
        pixelAP.setAttributeNS( null, "x",  medidaXespace/2-pixelTAMx/2 );
        pixelAP.setAttributeNS( null, "y", medidaYespace/2-pixelTAMy/2 );
        document.getElementById( mudaIDappendChild ).appendChild( pixelAP );
        //TOP
        pixelAP = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        pixelAP.setAttributeNS( null, "width", pixelTAMx );
        pixelAP.setAttributeNS( null, "height", pixelTAMy );
        pixelAP.setAttributeNS( null, "fill", "#000" );
        pixelAP.setAttributeNS( null, "x",  medidaXespace/2-pixelTAMx/2 );
        pixelAP.setAttributeNS( null, "y", 0 );
        document.getElementById( mudaIDappendChild ).appendChild( pixelAP );
        //LEFT
        pixelAP = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        pixelAP.setAttributeNS( null, "width", pixelTAMx );
        pixelAP.setAttributeNS( null, "height", pixelTAMy );
        pixelAP.setAttributeNS( null, "fill", "#000" );
        pixelAP.setAttributeNS( null, "x",  0 );
        pixelAP.setAttributeNS( null, "y", medidaYespace/2-pixelTAMy/2 );
        document.getElementById( mudaIDappendChild ).appendChild( pixelAP );
        //RIGHT
        pixelAP = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        pixelAP.setAttributeNS( null, "width", pixelTAMx );
        pixelAP.setAttributeNS( null, "height", pixelTAMy );
        pixelAP.setAttributeNS( null, "fill", "#000" );
        pixelAP.setAttributeNS( null, "x",  medidaXespace-pixelTAMx );
        pixelAP.setAttributeNS( null, "y", medidaYespace/2-pixelTAMy/2 );
        document.getElementById( mudaIDappendChild ).appendChild( pixelAP );
        //BOTTOM
        pixelAP = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        pixelAP.setAttributeNS( null, "width", pixelTAMx );
        pixelAP.setAttributeNS( null, "height", pixelTAMy );
        pixelAP.setAttributeNS( null, "fill", "#000" );
        pixelAP.setAttributeNS( null, "x",  medidaXespace/2-pixelTAMx/2 );
        pixelAP.setAttributeNS( null, "y", medidaYespace-pixelTAMy );
        document.getElementById( mudaIDappendChild ).appendChild( pixelAP );

    }

    if( modSVGCANVAS == "canvas" ){

        //CENTER
        c.beginPath();
            c.fillStyle = "#000" ;
            c.fillRect( medidaXespace/2-pixelTAMx/2 , medidaYespace/2-pixelTAMy/2 , pixelTAMx , pixelTAMy );
            c.fill();
        c.closePath();
        //TOP
        c.beginPath();
            c.fillStyle = "#000" ;
            c.fillRect( medidaXespace/2-pixelTAMx/2 , 0 , pixelTAMx , pixelTAMy );
            c.fill();
        c.closePath();
        //LEFT
        c.beginPath();
            c.fillStyle = "#000" ;
            c.fillRect( 0 , medidaYespace/2-pixelTAMy/2 , pixelTAMx , pixelTAMy );
            c.fill();
        c.closePath();
        //RIGHT
        c.beginPath();
            c.fillStyle = "#000" ;
            c.fillRect( medidaXespace-pixelTAMx , medidaYespace/2-pixelTAMy/2 , pixelTAMx , pixelTAMy );
            c.fill();
        c.closePath();
        //BOTTOM
        c.beginPath();
            c.fillStyle = "#000" ;
            c.fillRect( medidaXespace/2-pixelTAMx/2 , medidaYespace-pixelTAMy , pixelTAMx , pixelTAMy );
            c.fill();
        c.closePath();

    }
	
}


function wPointPath( jsonCaminho ){
    
    var num1 , num2 , control , peganum1 , peganum2 , posiX , posiY , contCaminho ; 
    num1 = -1;
    num2 = 0;
    control=0;
    posiX=0;
    posiY=0;
    contCaminho = 0;

    var caminho = jsonCaminho;

    for( cont=0; cont<caminho.length; cont++ ){ contCaminho++;}
    for( i=0; i<contCaminho/2; i++ ){

        control++;

       if( control <= 1 ){
            num1++;num2++;

            peganum1 = caminho[ num1 ];
            posiX = peganum1;
            peganum2 = caminho[ num2 ];
            posiY = peganum2 ;

       }
       if( control >= 2 ){
            num1+=2;num2+=2;

            peganum1 = caminho[ num1 ]+posiX;
            posiX = peganum1;
            peganum2 = caminho[ num2 ]+posiY;
            posiY = peganum2 ;

       }

        wPoint( posiX,posiY );

    }

}

function wLinePath( jsonPoints ){

    var caminho , num1 , num2 , control , peganum1 , peganum2 , ligaX , ligaY ;
    caminho = jsonPoints;
    num1 = -1;
    num2 = 0 ;
    control = 0;
    ligaX = 0;
    ligaY = 0;

    for( i=0 ; i<caminho.length ; i++ ){

        control++;

        if( control <=1 ){
            num1++;
            num2++;
            peganum1 = caminho[ num1 ];
            peganum2 = caminho[ num2 ];
            ligaX = peganum1;
            ligaY = peganum2;
            cham( peganum1 , peganum2 );
        }
        if( control >=2 ){
            num1+=2;
            num2+=2;
            peganum1 = caminho[ num1 ];
            peganum2 = caminho[ num2 ];
            
            if( ((ligaX<peganum1)&&(ligaY==peganum2))||((ligaX==peganum1)&&(ligaY<peganum2))||((ligaX>peganum1)&&(ligaY==peganum2))||((ligaX==peganum1)&&(ligaY>peganum2)) ){

                for( x = ligaX ; x<peganum1 ; x++ ){
                    ligaX++;
                    cham( ligaX , peganum2 );
                }
                for( x = ligaX ; x>peganum1 ; x-- ){
                    ligaX--;
                    cham( ligaX , peganum2 );
                }

                for( y = ligaY ; y<peganum2 ; y++ ){
                    ligaY++;
                    cham( ligaX , ligaY );
                }
                for( y = ligaY ; y>peganum2 ; y-- ){
                    ligaY--;
                    cham( ligaX , ligaY );
                }
            
            }

            if( (ligaX<peganum1)&&(ligaY<peganum2) ){
                
                for( o = ligaX ; o<peganum1 ; o++ ){
                    ligaX++;
                    ligXY();
                }
                function ligXY(){
                    if( ligaY < peganum2 ){
                        ligaY++;
                    }
                    cham( ligaX , ligaY );
                }
                if( ligaY < peganum2 ){
                    for( k = ligaY ; k<peganum2 ; k++ ){
                        ligXY();
                    }
                }

            }
            if( (ligaX>peganum1)&&(ligaY>peganum2) ){
                
                for( o = ligaX ; o>peganum1 ; o-- ){
                    ligaX--;
                    ligXY();
                }
                function ligXY(){
                    if( ligaY > peganum2 ){
                        ligaY--;
                    }
                    cham( ligaX , ligaY );
                }
                if( ligaY > peganum2 ){
                   for( k = ligaY ; k>peganum2 ; k-- ){
                       ligXY();
                   }
                }

            }
            if( (ligaX>peganum1)&&(ligaY<peganum2) ){
                
                for( o = ligaX ; o>peganum1 ; o-- ){
                    ligaX--;
                    ligXY();
                }
                function ligXY(){
                    if( ligaY < peganum2 ){
                        ligaY++;
                    }
                    cham( ligaX , ligaY );
                }
                if( ligaY < peganum2 ){
                    for( k = ligaY ; k<peganum2 ; k++ ){
                        ligXY();
                    }
                }

            }
            if( (ligaX<peganum1)&&(ligaY>peganum2) ){
                
                for( o = ligaY ; o>peganum2 ; o-- ){
                    ligaY--;
                    ligXY();
                }
                function ligXY(){
                    if( ligaX < peganum1 ){
                        ligaX++;
                    }
                    cham( ligaX , ligaY );
                }
                if( ligaX < peganum1 ){
                    for( k = ligaX ; k<peganum1 ; k++ ){
                        ligXY();
                    }
                }

            }

        }

    }

    function cham( x, y ){
        wPoint( x , y );
    }

}

//===================================FUNCTIONS APENAS PARA CANVAS

function wClear(){

    c.beginPath();
        c.clearRect( 0 , 0 , medidaXespace , medidaYespace );
    c.closePath();
    
}

//==========================================================================
//CRIACAO DO ESPACO DE SVG AO BODY

function w2pixelCanvas( w , h , npx , npy , grid ){

    modSVGCANVAS = "canvas" ;

    w2pixel( w , h , npx , npy , grid );

}

function w2pixel( w , h , npx , npy , grid ){
		
	numnpx = npx;
	numnpy = npy;

	medidaXespace = w ;
	medidaYespace = h ;
		
	//VALOR PADRAO W e H
	if( (w==null)||(h==null) ){
		w = DP.espTAM;
		h = DP.espTAM;
	}
	
	//função para distribuir IDespW2P
	numberIDespW2P++;
	pegaIDespW2P = DP.IDespW2P + numberIDespW2P ;
	
	//função para mudar a id de APPENDCHILD na GEOMETRIAS
	mudaIDappendChild = pegaIDespW2P ;
    
    if( modSVGCANVAS == "svg" ){
        esp = document.createElementNS( "http://www.w3.org/2000/svg" , "svg" );
        espatt1 = document.createAttribute( "width" );
        espatt2 = document.createAttribute( "height" );
        espatt3 = document.createAttribute( "id" );
        espatt1.value = w ;
        espatt2.value = h ;
        espatt3.value = pegaIDespW2P ;
        esp.setAttributeNode( espatt1 );
        esp.setAttributeNode( espatt2 );
        esp.setAttributeNode( espatt3 );
        document.body.appendChild(esp);
    }
    if( modSVGCANVAS == "canvas" ){

        esp = document.createElement("canvas");
        espatt1 = document.createAttribute("id");
        espatt1.value = pegaIDespW2P ;
        esp.width = w ;
        esp.height = h ;
        esp.setAttributeNode( espatt1 );
        document.body.appendChild( esp );
        c = esp.getContext("2d");

    }
    
	//==========================================================================
	// GERADOR DE PIXELS DE APOIO
		
	//valores var 
	if( npx == null ){ npx = DP.nPixelXy }
	if( npy == null ){ npy = DP.nPixelXy }
	pixelTAMx = w / npx - 1 ;
	pixelTAMy = h / npy - 1 ;
	pixelESPx = pixelTAMx + 1;
	pixelESPy = pixelTAMy + 1;
		
	if( modSVGCANVAS == "svg" ){

        if( grid == null ){ grid = true }
        if( grid == true ){
            
            for( y = 0 ; y < npy ; y++ ){
                for( x = 0 ; x < npx ; x++ ){
                    
                    //======sistema de clases pixel grid
                    
                    classpixelX++;
                    if( classpixelX > npx -1 ){ 
                        classpixelY++;
                        classpixelX = 0 ;
                    }
                    
                    //==============================
                    
                    pixelAP = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                    pixelAP.setAttributeNS( null, "width", pixelTAMx );
                    pixelAP.setAttributeNS( null, "height", pixelTAMy );
                    pixelAP.setAttributeNS( null, "fill", "rgba(210,210,210,0.9)" );
                    pixelAP.setAttributeNS( null, "x", x*pixelESPx );
                    pixelAP.setAttributeNS( null, "y", y*pixelESPy );
                    pixelAP.setAttributeNS( null, "class", classpixelX+"-"+classpixelY );
                    esp.appendChild( pixelAP );
                
                }
            }
        }

    }

    if( modSVGCANVAS == "canvas"){

        if( grid == null ){ grid = true }
        if( grid == true ){

            for( y = 0 ; y < npy ; y++ ){
                for( x = 0 ; x < npx ; x++ ){

                    c.beginPath();
                        c.fillStyle = "rgba(210,210,210,0.9)" ;
                        c.fillRect( x*pixelESPx , y*pixelESPy , pixelTAMx , pixelTAMy );
                        c.fill();
                    c.closePath();

                }
            }
        }

    }
	
}

//======================================================
//            GEOMETRIA
//======================================================

// RECT / QUADRADO

function wRect( xx , yy , w , h , rxy ){
	
	newPointX = xx*pixelTAMx+xx;
	newPointY = yy*pixelTAMy+yy;
	
	if( (rxy == null)&&( allpixelradius == null ) ){ rxy = 0 ; }
	if( ( allpixelradius != null)&&( rxy == null ) ){ rxy = allpixelradius; }
	
	classXX = 0 ;
	classYY = 0 ;
    
    if( modSVGCANVAS == "svg" ){

        for( y = 0 ; y < h ; y++ ){
            for( x = 0 ; x < w ; x++ ){
            
                pixelAP = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                pixelAP.setAttributeNS( null, "width", pixelTAMx+pasteX );
                pixelAP.setAttributeNS( null, "height", pixelTAMy+pasteY );
                pixelAP.setAttributeNS( null, "fill", colorFill );
                pixelAP.setAttributeNS( null, "x",  newPointX+x*pixelESPx+moveX );
                pixelAP.setAttributeNS( null, "y", newPointY+y*pixelESPy+moveY );
                
                //MAIS ATRIBUTOS
                
                pixelAP.setAttributeNS( null, "rx", rxy );
                pixelAP.setAttributeNS( null, "ry", rxy );
                
                pixelAP.setAttributeNS( null, "stroke", colorStroke );
                pixelAP.setAttributeNS( null, "stroke-width", ESPEstroke );
                
                //CLASS
                
                classXX = xx+1 ;
                classYY = yy+1 ;
                
                pixelAP.setAttributeNS( null, "class", "r"+classXX+"-"+classYY );
                
                //========
                
                document.getElementById( mudaIDappendChild ).appendChild( pixelAP );
            
            }
        }

    }

    if( modSVGCANVAS == "canvas" ){

        for( y = 0 ; y < h ; y++ ){
            for( x = 0 ; x < w ; x++ ){
                c.beginPath();
                    c.strokeStyle = colorStroke ;
                    c.lineWidth = ESPEstroke ;
                    c.fillStyle = colorFill ;
                    c.fillRect( newPointX+x*pixelESPx+moveX , newPointY+y*pixelESPy+moveY , pixelTAMx+pasteX , pixelTAMy+pasteY );
                    if( ESPEstroke != null||0 ){
                        c.strokeRect( newPointX+x*pixelESPx+moveX , newPointY+y*pixelESPy+moveY , pixelTAMx+pasteX , pixelTAMy+pasteY );
                        c.stroke();
                    }
                    c.fill();
                c.closePath();
            }
        }

    }
	
}

// POINT / PONTO

function wPoint( xx , yy, rxy ){
	
	newPointX = xx*pixelTAMx+xx;
	newPointY = yy*pixelTAMy+yy;
    
    if( modSVGCANVAS == "svg" ){

        if( (rxy == null)&&( allpixelradius == null ) ){ rxy = 0 ; }
        if( ( allpixelradius != null)&&( rxy == null ) ){ rxy = allpixelradius; }
        
        pixelAP = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        pixelAP.setAttributeNS( null, "width", pixelTAMx+pasteX );
        pixelAP.setAttributeNS( null, "height", pixelTAMy+pasteY );
        pixelAP.setAttributeNS( null, "fill", colorFill );
        pixelAP.setAttributeNS( null, "x",  newPointX+moveX );
        pixelAP.setAttributeNS( null, "y", newPointY+moveY );
        
        //MAIS ATRIBUTOS
                
        pixelAP.setAttributeNS( null, "rx", rxy );
        pixelAP.setAttributeNS( null, "ry", rxy );
        
        pixelAP.setAttributeNS( null, "stroke", colorStroke );
        pixelAP.setAttributeNS( null, "stroke-width", ESPEstroke );
        
        //CLASS
        if( xx == 0 ){ xx = -1 }
        if( yy == 0 ){ yy = -1 }
        classXX = xx + 1;
        classYY = yy + 1;
        
        pixelAP.setAttributeNS( null, "class", "p"+classXX+"-"+classYY );
        
        //======
                
        document.getElementById( mudaIDappendChild ).appendChild( pixelAP );

    }

    if(modSVGCANVAS == "canvas" ){

        c.beginPath();
            c.strokeStyle = colorStroke ;
            c.lineWidth = ESPEstroke ;
            c.fillStyle = colorFill ;
            c.fillStyle = colorFill ;
            c.fillRect( newPointX+moveX , newPointY+moveY , pixelTAMx+pasteX , pixelTAMy+pasteY );
            if( ESPEstroke != null||0 ){
                c.strokeRect( newPointX+moveX , newPointY+moveY , pixelTAMx+pasteX , pixelTAMy+pasteY );
                c.stroke();
            }
            c.fill();
        c.closePath();

    }
	
}