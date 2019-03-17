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
	
	----------------
	
	class pixel grid
	id w2pixel
	class geometry
	
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
	espatt1,
	espatt2,
	espatt3,
	
	pixelAP,
	
	pegaIDespW2P,
	mudaIDappendChild
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
	
	//CENTER
	pixelAP = document.createElementNS("http://www.w3.org/2000/svg", "rect");
	pixelAP.setAttributeNS( null, "width", pixelTAMx );
	pixelAP.setAttributeNS( null, "height", pixelESPy );
	pixelAP.setAttributeNS( null, "fill", "#000" );
	pixelAP.setAttributeNS( null, "x",  medidaXespace/2-pixelTAMx/2 );
	pixelAP.setAttributeNS( null, "y", medidaYespace/2-pixelTAMy/2 );
	document.getElementById( mudaIDappendChild ).appendChild( pixelAP );
	//TOP
	pixelAP = document.createElementNS("http://www.w3.org/2000/svg", "rect");
	pixelAP.setAttributeNS( null, "width", pixelTAMx );
	pixelAP.setAttributeNS( null, "height", pixelESPy );
	pixelAP.setAttributeNS( null, "fill", "#000" );
	pixelAP.setAttributeNS( null, "x",  medidaXespace/2-pixelTAMx/2 );
	pixelAP.setAttributeNS( null, "y", 0 );
	document.getElementById( mudaIDappendChild ).appendChild( pixelAP );
	//LEFT
	pixelAP = document.createElementNS("http://www.w3.org/2000/svg", "rect");
	pixelAP.setAttributeNS( null, "width", pixelTAMx );
	pixelAP.setAttributeNS( null, "height", pixelESPy );
	pixelAP.setAttributeNS( null, "fill", "#000" );
	pixelAP.setAttributeNS( null, "x",  0 );
	pixelAP.setAttributeNS( null, "y", medidaYespace/2-pixelTAMy/2 );
	document.getElementById( mudaIDappendChild ).appendChild( pixelAP );
	//RIGHT
	pixelAP = document.createElementNS("http://www.w3.org/2000/svg", "rect");
	pixelAP.setAttributeNS( null, "width", pixelTAMx );
	pixelAP.setAttributeNS( null, "height", pixelESPy );
	pixelAP.setAttributeNS( null, "fill", "#000" );
	pixelAP.setAttributeNS( null, "x",  medidaXespace-pixelTAMx );
	pixelAP.setAttributeNS( null, "y", medidaYespace/2-pixelTAMy/2 );
	document.getElementById( mudaIDappendChild ).appendChild( pixelAP );
	//BOTTOM
	pixelAP = document.createElementNS("http://www.w3.org/2000/svg", "rect");
	pixelAP.setAttributeNS( null, "width", pixelTAMx );
	pixelAP.setAttributeNS( null, "height", pixelESPy );
	pixelAP.setAttributeNS( null, "fill", "#000" );
	pixelAP.setAttributeNS( null, "x",  medidaXespace/2-pixelTAMx/2 );
	pixelAP.setAttributeNS( null, "y", medidaYespace-pixelTAMy );
	document.getElementById( mudaIDappendChild ).appendChild( pixelAP );
	
}

//==========================================================================
//CRIACAO DO ESPACO DE SVG AO BODY

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
	
	
		
	//==========================================================================
	// GERADOR DE PIXELS DE APOIO
		
	//valores var 
	if( npx == null ){ npx = DP.nPixelXy }
	if( npy == null ){ npy = DP.nPixelXy }
	pixelTAMx = w / npx - 1 ;
	pixelTAMy = h / npy - 1 ;
	pixelESPx = pixelTAMx + 1;
	pixelESPy = pixelTAMy + 1;
		
		
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

// POINT / PONTO

function wPoint( xx , yy, rxy ){
	
	newPointX = xx*pixelTAMx+xx;
	newPointY = yy*pixelTAMy+yy;
	
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