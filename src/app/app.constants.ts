export class AppConstants {

	//public static get baseServidor(): string{ return "http://localhost:8080/" }
  public static get baseServidor(): string{ return "https://meubanco.herokuapp.com/" }

	public static get baseLogin(): string{ return this.baseServidor + "meubanco/usuario/login"}
	public static get baseUrl(): string{ return this.baseServidor + "meubanco/usuario/"}
  public static get baseUrlExtrato(): string{ return this.baseServidor + "meubanco/extrato/"}
  public static get baseUrlPix(): string{ return this.baseServidor + "meubanco/conta/pix/"}

}
