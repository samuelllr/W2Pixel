# W2Pixel
JavaScript plugin for pixelated drawings.

<img src="w2p.png"/>

************

W2Pixel, a plugin developed for pixel drawings in the browser, made in JavaScript, with it you draw, using in your HTML code and running in your browser, so the drawing is formed in pixelated format. W2Pixel, is fast and practical, simple to learn in just 1 day.

************

W2Pixel, um plugin desenvolvido para desenhos em pixel no navegador, feito em JavaScript, com ele você desenha, utilizando em seu código HTML e executando em seu navegador, assim o desenho é formado no formato pixelado. W2Pixel, é rápido e prático, simples de aprender em apenas 1 dia.

************

************

What's new in the new version 2.1.0?  

There is possibility to create animations, now there is the w2pixelCanvas( ); that changes the rendering SVG to CANVAS, and also the wClear( ); to clean your canvas during the animation.



O que há de novo na nova versão 2.1.0?

Há possibilidade de criar animações, agora existe o w2pixelCanvas( ); que muda a renderização SVG para CANVAS, e também o wClear( ); para limpar a sua tela de desenho durante a animação.

************

Static drawing example
<br><br>
Exemplo de desenho estático

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

            wRect( 6 , 15 , 3 , 1 );
            wRect( 8 , 14 , 3 , 1 );
            wRect( 10 , 13 , 2 , 1 );
            wRect( 11 , 12 , 2 , 1 );
            wRect( 12 , 11 , 2 , 1 );
            wRect( 13 , 10 , 2 , 1 );
            wRect( 14 , 8 , 1 , 2 );
            wRect( 15 , 6 , 1 , 3 );

            wFill( "#000" );
            wRect( 2 , 2 , 1 , 4 );
            wRect( 3 , 2 , 3 , 1 );
            wRect( 4 , 3 , 1 , 2 );
            wRect( 5 , 5 , 2 , 1 );
            wPoint( 7 , 4 );
            wRect( 6 , 3 , 4 , 1 );
            wRect( 10 , 4 , 4 , 1 );
            wRect( 14 , 5 , 3 , 1 );
            wRect( 16 , 6 , 1 , 3 );
            wRect( 15 , 9 , 1 , 2 );
            wPoint( 14 , 11 );
            wPoint( 13 , 12 );
            wPoint( 12 , 13 );
            wPoint( 11 , 14 );
            wRect( 9 , 15 , 2 , 1 );
            wRect( 5 , 16 , 4 , 1 );
            wRect( 5 , 14 , 1 , 2 );
            wRect( 4 , 10 , 1 , 4 );
            wRect( 3 , 6 , 1 , 4 ); 
            wRect( 6 , 14 , 2 , 1 );
            wRect( 8 , 13 , 2 , 1 );
            wPoint( 10 , 12 );
            wPoint( 11 , 11 );
            wPoint( 12 , 10 );
            wRect( 13 , 8 , 1 , 2 );
            wRect( 14 , 6 , 1 , 2 );
            wRect( 10 , 6 , 2 , 1 );
            wRect( 12 , 7 , 1 , 2 );
            wRect( 10 , 9 , 2 , 1 );
            wRect( 9 , 7 , 1 , 2 );
            wRect( 5 , 12 , 2 , 1 );
            wRect( 7 , 10 , 1 , 2 );
            wRect( 5 , 9 , 2 , 1 );


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

Current version : 2.0.0 .
<br>
Versão atual : 2.0.0 .

site : https://samcode.000webhostapp.com
