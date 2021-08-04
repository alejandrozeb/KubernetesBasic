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

    -------Kubernetes a necessity-----------
    ventajas de docker 
    - los runtime pueden ser variaos y optmizados    
    - tienen un empaquetado estandar con las imagenes que se usan en cualquier ambiente de desarrollo

    luego tenemos a docker compose que ayuda a interconectar y administrar estos containers.

    pero estas herramientas tienen un limite y es que solo lo hacen en una sola maquina en un docker host que puede ser tu pc.

    cuando ya pasamos a produccion y tenemos una aplicacion con 100 o 500 containers ya se complica todo

    por que en una infraestrucutra grande ya se usan nodos donde se alojan nuestros docker hosts entonces debemos afrontar alunos retos como

    ---¿ QUE Y DONDE CORREN ESTOS CONTAINERS?
    el problema a esta pregunta en la programacion el horario el scheduliing de cada container y tambien la escalabilidad.

    ----¿COMO CONECTAR DOS DOCKER HOST, COMO CONECTAR DOS CONTAINERS EN DIFERENTES HOST?-----------
    problemas  networking ademas como llevas a cabo el update de cada container con un nuevo feature ademas de los problemas al replicar los servicios que tambien lleva a la autoescalabilidad.

    tambien el balanceo de los servicios ademas del acoplamiento de cada container eliminar containers pero que afecte a la aplicacion

    ---------Solution--------------------
    COE COntainer Orchestration Engine
     called kubernetes

     que se encarga de estos temas añadiendo conceptos que nos permitan manejar todo estos desafios.

     cada nodo podemos crear una entidad logica llamada cluster pueden ser desde 2,5,8, hasta 5000 o mas. ademas se encarga de añadir nuvos nodos eliminarlos claro que las liitantes de estos cluster depende del servicio que se use por que finalmente el limite sera el hardware en este caso.










*/