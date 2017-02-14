
var app = {

	contextPath: "http://apiportal.alerj.rj.gov.br"  
	,contextPathPortal: "http://apialerj.rj.gov.br"  
		
	//,contextPathPortal: "http://10.11.63.11:8040"  
		
		
	
	,appPath: "/alerj"
	
	,appName: ""
    ,version: "1.5beta (Projetos Especiais)"
	
		
	,crossdomain : false
	,crossdomainPortal : false
	
	//path a ser configurado quando os acessos serao crossdomain. Servidor de servicos que so aceita requisicoes AJAX GET.
	,remoteServicePath : "/api/v1.0"
	,remoteServicePathPortal : "/portal.alerj.service/api"
	
	//path a ser configurado quando os acessos nao serao crossdomain.	
	,servicePath : "/api/v1.0"
	,servicePathPortal : "/api"
	
	,writeScript: function( path ){
		var script = [
			"<","script"
			," type=\"text/javascript\""
			," charset=\"UTF-8\""
			," src=\"",this.appName, this.mobilePath,path, "\""
			,">"
			,"</","script",">"
		];
		document.write( script.join( "" ) );
	}

	,writeCode: function( code ){
		var script = [
			"<","script"
			," type=\"text/javascript\""
			," charset=\"UTF-8\""
			,">"
			,code
			,"</","script",">"
		];
		document.write( script.join( "" ) );
	}
	
	,writeLink: function( path ){
		var link = [
			"<","link"
			," rel=\"stylesheet\""
			," href=\"",this.appName,this.mobilePath,path,"\""
			,">"
			,"</","link", ">"
		];
		document.write( link.join( "" ) );
	}
}
if ( typeof console == "undefined" ) {
	// Evita erro de console do firefox nao inicialisado.
	console = {
		log: function( ){}
	}
}
