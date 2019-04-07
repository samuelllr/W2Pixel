# W2Pixel
JavaScript plugin for pixelated drawings.

<img src="w2p.png"/>

************

W2Pixel, a plugin developed for pixel drawings in the browser, made in JavaScript, with it you draw, using in your HTML code and running in your browser, so the drawing is formed in pixelated format. W2Pixel, is fast and practical, simple to learn in just 1 day.

W2Pixel, um plugin desenvolvido para desenhos em pixel no navegador, feito em JavaScript, com ele você desenha, utilizando em seu código HTML e executando em seu navegador, assim o desenho é formado no formato pixelado. W2Pixel, é rápido e prático, simples de aprender em apenas 1 dia.

************

************

What's new in the new version 2.1.0?  

There is possibility to create animations, now there is the w2pixelCanvas( ); that changes the rendering SVG to CANVAS, and also the wClear( ); to clean your canvas during the animation.



O que há de novo na nova versão 2.1.0?

Há possibilidade de criar animações, agora existe o w2pixelCanvas( ); que muda a renderização SVG para CANVAS, e também o wClear( ); para limpar a sua tela de desenho durante a animação.

-------------------------------------------------------------------------------------------------------------------------------------

What's new in the new version 2.2.0?  

New codes: wLinePath and wPointPath, they will facilitate more to draw points, lines, interlocking lines as SVG polyline.



O que há de novo na nova versão 2.2.0?

Novos códigos: wLinePath e wPointPath, eles iram facilitar mais para desenhar pontos, linhas únicas, linhas interligadas como polyline de SVG.

************
************

Static drawing example:
<br><br>
Exemplo de desenho estático:

<img src="ex.png"/>

<code><pre>

    <script>

        w2pixel( 400 , 400 , 19 , 19 , false );

        wDeform( 2 , 2 );

        wFill( "#ff0" );

        wRect( 5 , 5 , 8 , 8 );
        wRect( 3 , 3 , 1 , 3 );
        wRect( 4 , 5 , 1 , 5 );
        wRect( 8 , 4 , 2 , 1 );
        wRect( 13 , 5 , 1 , 3 );
        wRect( 5 , 13 , 3 , 1 );

        wFill( "#f20" );

        wRect( 5 , 10 , 2 , 2 );
        wRect( 10 , 7 , 2 , 2 );
        wRect( 5 , 3 , 1 , 2 );
        wPoint( 6 , 4 );

        wFill( "#783c00" );

        wLinePath([
            6,15,8,15,8,14,10,14,10,13,11,13,
            11,12,12,12,12,11,13,11,13,10,
            14,10,14,8,15,8,15,6
        ]);

        wFill( "#000" );
        wLinePath([
            4,13,4,10,3,9,3,6,2,5,2,2,5,2,6,3,9,3,
            10,4,13,4,14,5,16,5,16,8,15,9,15,10,
            9,15,5,16,5,14,7,14,9,13,13,8,14,6
        ]);
        wPointPath([
            10,6,1,0,1,1,0,1,-1,1,-1,0,-1,-1,0,-1,
            -5,-4,0,1,3,0,-1,1,-1,0,
            0,4,1,0,1,1,0,1,-1,1,-1,0
        ]);


    </script>

</pre></code>

**************

Example of drawing animation:
<br><br>
Exemplo de animação de desenho:

<code><pre>

    <script>

        var frame = -1 ;

        w2pixelCanvas( 400 , 400 , 10 , 10 , false );
       
        window.setInterval( function(){

            frame++;

            wClear();
            wFill( "#000" ); 

            switch( frame ){
                case 0:
                    wRect( 3,3,4,1 );
                break;
                case 1:
                    wRect( 3,3,3,1 );
                    wPoint( 3,4 );
                break;
                case 2:
                    wRect( 3,3,2,1 );
                    wRect( 3,4,1,2 );
                break;
                case 3:
                    wRect( 3,3,1,4 );
                break;
                case 4:
                    wRect( 3,4,1,3 );
                    wPoint( 4,6 );
                break;
                case 5:
                    wRect( 3,5,1,2 );
                    wRect( 4,6,2,1 );
                break;
                case 6:
                    wRect( 3,6,4,1 );
                break;
                case 7:
                    wRect( 4,6,3,1 );
                    wPoint( 6,5 );
                break;
                case 8:
                    wRect( 5,6,2,1 );
                    wRect( 6,4,1,2 );
                break;
                case 9:
                    wRect( 6,3,1,4 );
                break;
                case 10:
                    wRect( 6,3,1,3 );
                    wPoint( 5,3 );
                break;
                case 11:
                    wRect( 6,3,1,2 );
                    wRect( 4,3,2,1 );
                break;
                case 12:
                    wRect( 3,3,4,1 );
                break;
            }

            if( frame == 12 ){
                frame = 0;
            }

        },1000/5);
       
        
        
    </script>

</code></pre>

Code result above : https://samcode.000webhostapp.com/exemploGithub.html
<br><br>
Resultado do código acima:  https://samcode.000webhostapp.com/exemploGithub.html

************

site : https://samcode.000webhostapp.com

Current version : 2.2.0 .
<br>
Versão atual : 2.2.0 .

data/date : 06/04/2019.

