const dogs = [{
  credit: 'http://www.ascii-art.de/ascii/def/dogs.txt',
  ascii: `
   .-------------.       .    .   *       *
  /_/_/_/_/_/_/_/ \\         *       .   )    .
 //_/_/_/_/_/_// _ \\ __          .        .
/_/_/_/_/_/_/_/|/ \\.' .'-o
 |             ||-'(/ ,--'
 |             ||  _ |
 |             ||'' ||
 |_____________|| |_|L`
}, {
  credit: 'http://www.ascii-art.de/ascii/def/dogs.txt',
  ascii: `
                __
               /\\/'-,
       ,--'''''   /"
 ____,'.  )       \\___
'"""""------'"""'-----'`
}, {
  credit: 'http://chris.com/ascii/index.php?art=animals/dogs',
  ascii: `
                                         do.
                                        :NOX
                                       ,NOM@:
                                       :NNNN:
                                       :XXXON
                                       :XoXXX.
                                       MM;ONO:
  .oob..                              :MMO;MOM
 dXOXYYNNb.                          ,NNMX:MXN
 Mo"'  '':Nbb                        dNMMN MNN:
 Mo  'O;; ':Mb.                     ,MXMNM MNX:
 @O :;XXMN..'X@b.                  ,NXOMXM MNX:
 YX;;NMMMM@M;;OM@o.                dXOOMMN:MNX:
 'MOONM@@@MMN:':NONb.            ,dXONM@@MbMXX:
  MOON@M@@MMMM;;:OOONb          ,MX'"':ONMMMMX:
  :NOOM@@MNNN@@X;""XNN@Mb     .dP"'   ,..OXM@N:
   MOON@@MMNXXMMO  :M@@M...@o.oN""":OOOXNNXXOo:
   :NOX@@@MNXXXMNo :MMMM@K"',:;NNM@@NXM@MNO;.'N.
    NO:X@@MNXXX@@O:'X@@@@MOOOXMM@M@NXXN@M@NOO ''b
    'MO.'NMNXXN@@N: 'XXM@NMMXXMM@M@XO"'"XM@X;.  :b
     YNO;'"NXXXX@M;;::"XMNN:""ON@@MO: ,;;.:Y@X: :OX.
      Y@Mb;;XNMM@@@NO: ':O: 'OXN@@MO" ONMMX:'XO; :X@.
      '@XMX':OX@@MN:    ;O;  :OX@MO" 'OMM@N; ':OO;N@N
       YN;":.:OXMX"': ,:NNO;';XMMX:  ,;@@MNN.'.:O;:@X:
       '@N;;XOOOXO;;:O;:@MOO;:O:"" ,oMP@@K"YM.;NMO;'NM
        '@@MN@MOX@@MNMN;@@MNXXOO: ,d@NbMMP'd@@OX@NO;.'bb.
       .odMX@@XOOM@M@@XO@MMMMMMNNbN"YNNNXoNMNMO"OXXNO.."";o.
     .ddMNOO@@XOOM@@XOONMMM@@MNXXMMo;."' .":OXO ':.'"'"'  '""o.
    'N@@X;,M@MXOOM@OOON@MM@MXOO:":ONMNXXOXX:OOO               ""ob.
   ')@MP"';@@XXOOMMOOM@MNNMOO""   '"OXM@MM: :OO.        :...';o;.;Xb.
  .@@MX" ;X@@XXOOM@OOXXOO:o:'      :OXMNO"' ;OOO;.:     ,OXMOOXXXOOXMb
 ,dMOo:  oO@@MNOON@N:::"      .    ,;O:""'  .dMXXO:    ,;OX@XO"":ON@M@
:Y@MX:.  oO@M@NOXN@NO. ..: ,;;O;.       :.OX@@MOO;..   .OOMNMO.;XN@M@P
,MP"OO'  oO@M@O:ON@MO;;XO;:OXMNOO;.  ,.;.;OXXN@MNXO;.. oOX@NMMN@@@@@M:
'' "O:;;OON@@MN::XNMOOMXOOOM@@MMNXO:;XXNNMNXXXN@MNXOOOOOXNM@NM@@@M@MP
   :XN@MMM@M@M:  :'OON@@XXNM@M@MXOOdN@@@MM@@@@MMNNXOOOXXNNN@@M@MMMM"'
   .oNM@MM@ONO'   :;ON@@MM@MMNNXXXM@@@@M@PY@@MMNNNNNNNNNNNM@M@M@@P'
  ;O:OXM@MNOOO.   'OXOONM@MNNMMXON@MM@@b. 'Y@@@@@@@@@@@@@M@@MP"'"
 ;O':OOXNXOOXX:   :;NMO:":NMMMXOOX@MN@@@@b.:M@@@M@@@MMM@""""
 :: ;"OOOOOO@N;:  'ON@MO.'":""OOOO@@NNMN@@@. Y@@@MMM@@@@b
 :;   ':O:oX@@O;;  ;O@@XO'   "oOOOOXMMNMNNN@MN""YMNMMM@@MMo.
 :N:.   ''oOM@NMo.::OX@NOOo.  ;OOOXXNNNMMMNXNM@bd@MNNMMM@MM@bb
  @;O .  ,OOO@@@MX;;ON@NOOO.. ' ':OXN@NNN@@@@@M@@@@MNXNMM@MMM@,
  M@O;;  :O:OX@@M@NXXOM@NOO:;;:,;;ON@NNNMM''"@@M@@@@@MXNMMMMM@N
  N@NOO;:oO;O:NMMM@M@OO@NOO;O;oOOXN@NNM@@'   'Y@NM@@@@MMNNMM@MM
  ::@MOO;oO:::OXNM@@MXOM@OOOOOOXNMMNNNMNP      ""MNNM@@@MMMM@MP
    @@@XOOO':::OOXXMNOO@@OOOOXNN@NNNNNNNN        ''YMM@@@MMM@P'
    MM@@M:'''' O:":ONOO@MNOOOOXM@NM@NNN@P  -hrr-     "'"""MM'
    ''MM@:     "' 'OOONMOYOOOOO@MM@MNNM"
      YM@'         :OOMN: :OOOO@MMNOXM'
      ':P           :oP''  "'OOM@NXNM'
       ''                    ':OXNP'
                               '"'`
}, {
  credit: 'http://chris.com/ascii/index.php?art=animals/dogs',
  ascii: `
                      ;\\
                     |' \\
  _                  ; : ;
 / '-.              /: : |
|  ,-.'-.          ,': : |
\\  :  '. '.       ,'-. : |
 \\ ;    ;  '-.__,'    '-.|
  \\ ;   ;  :::  ,::'':.  '.
   \\ '-. :  '    :.    '.  \\
    \\   \\    ,   ;   ,:    (\\
     \\   :., :.    ,'o)): ' '-.
    ,/,' ;' ,::"''.'---'   '.  '-._
  ,/  :  ; '"      ';'          ,--'.
 ;/   :; ;             ,:'     (   ,:)
   ,.,:.    ; ,:.,  ,-._ '.     \\""'/
   '::'     ':''  ,'(  \\'._____.-'"'
      ;,   ;  '.  '. '._'-.  \\\\
      ;:.  ;:       '-._'-.\\  \\'.
       '':. :        |' '. '\\  ) \\
          ' ;:       |    '--\\__,'
            ''      ,'
                 ,-'`
}, {
  credit: 'http://ascii.co.uk/art/dog',
  ascii: `
     888
     888
     888
 .d88888 .d88b.  .d88b.
d88" 888d88""88bd88P"88b
888  888888  888888  888
Y88b 888Y88..88PY88b 888
 "Y88888 "Y88P"  "Y88888
                     888
                Y8b d88P
                 "Y88P"`
}, {
  credit: 'http://textart4u.blogspot.com/2014/01/jake-dog-ascii-art-for-facebook-status.html',
  ascii: `
░░░░░░░░░░░░░░░░░░░░░░░░░░░░▄░░░░░
░░░░░░▄▄▄▀▀▀▀█▄▄▄░░░░░░░░░░░█▄░░░░
░░░▄█▀▀░░░░░░░░░▀▀█▄▄▄▄▄▄▄░░█▀▄░░░
░▄██▄░░░░░░░░░░░░░░░▀▄░░░▀▀██▄█░░░
▄▀▀░▀▀█▄░░░░░▄█▀▀█▄▄░▀█░░░░░░▀█▄░░
█░░░░░▄█▄▄▄▄█▀░░░░░█░░█▄░░░░░░░▀▄░
█▄░░▄▀▀░░░░▀▀▄▄░░░░█▄░░█░░░░░░░░█▄
████▀░░▄▄▄▄░░░▀▄▄▄██░░░█░░░░░░░░░█
███▀░░██████░░░███▀█▄░▄▀░░░░░░░░░█
░██░░░░█▀▀▀█░░░░█░░░▀▀▀░░░░░░░░░▄█
░█▀█░░░█▀▀▀█░░░░█░░░░░░░░░░░░░░░█░
░▀█▀▄▄█▀░░░▀█░░█▀░░░░░░░░░░░░░▄█░░
░░▀█░░░░░░░░░▀▀░░░░░░░░░░░░▄██░█░░
░░░░██▄░░░░░░░░░░░░░░░░▄▄█▀░██░█░░
░░░░█░▀█▀▀█▄▄▄▄▄▄▄▄██▀▀█░░░░██░█░░
░░░░█░░█░░░░░█░░█░░░█░░█░░░░██░█░░
░▄▄▄█░░█░░▄▄▄█░░█░▄▀▀░░█░░░▄██░█░░
▀█▄▄▄▄▄█░░█▄▄▄▄▄█░░▀▀▀▀░░░░█▄▄▄█░░`
}, {
  credit: 'http://www.chris.com/ascii/joan/www.geocities.com/SoHo/7373/petsdogs.html',
  ascii: `
                _  _..._ _
              .' ')     ( '.
             |  /'       \\  |
             \\_/|   q  p  |_/
  .-"''''"=-..--\\     Y  /
/'               '-.__=.'
'-/                 /o
  |                 |
  >     /'""--.    /
  |    ||      |   \\\\
  \\___,,))      \\_,,))`
}]

export default dogs
