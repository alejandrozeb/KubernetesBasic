/* 
    -----why?-----------------------
    tnemos una aplicacion con front y dos microservicios 
    podemos levantarla usando docker en una maquina
    pero para facilitar el trabajo podemos usar docker compose para levantar los microservicios y el front en una sola maquina

    pero aun con estas facilidades estamos limitados a una sola maquina donde se levantan estas mmaquinas virtuales con docker.

    el problema surge en produccion no vamos a tener una maquina si no datacenter que se va ir actualizadondo un nuevo deploy siemore

    si queremos usar 50 containes debemos decidir en estos hosts cuanta memorian utilizaran y otros detalles y hacerlo a mano es muy dificil.

    y ahi kubernetes llega a una solucion.

    Cluster-> es un conjunto de maquinas los hosting y los toma por una entidad logica desde ahora conocida como cluster

    ademas de este modo kubernetes e encarga de la orquestacion de estos containers y decide donde debe ir cada uno
    ventajas
    clusteirng schedulling scaling
    load balancing fault tolerance appdeployment







*/