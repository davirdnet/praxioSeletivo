export class Constants {
  public static EMAIL_REGEX:
    RegExp = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/;
  public static SOMENTE_NUMEROS: RegExp = /^(0*[1-9][0-9]*(.[0-9]+)?|0+.[0-9]*[1-9][0-9]*)$/;
  public static SOMENTE_INTEIROS: RegExp = /^\d[^e]*$/;
}
