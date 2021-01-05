export class UserProfile {
   public login: string;
   public id: string;
   public node_id: string;
   public avatar_url: string;
  //  public gravatarId: string;
   public url: string;
   public html_url: string;
  //  public gistsUrl: string;
  //  public starredUrl: string;
  //  public subscriptionsUrl: string;
  //  public organizationsUrl: string;
   public repos_url: string;
  //  public eventsUrl: string;
  //  public receivedEventsUrl: string;
   public type: string;
  //  public siteAdmin: string;
  constructor(
     login: string,
     id: string,
     node_id: string,
     avatar_url: string,
   //   gravatarId: string,
     url: string,
     html_url: string,
   //   gistsUrl: string,
   //   starredUrl: string,
   //   subscriptionsUrl: string,
   //   organizationsUrl: string,
     repos_url: string,
   //   eventsUrl: string,
   //   receivedEventsUrl: string,
     type: string,
   //   siteAdmin: string,
  ) {
    this.login = login;
    this.id = id;
    this.node_id = node_id;
    this.avatar_url = avatar_url;
    this.url = url;
    this.html_url = html_url;
    this.repos_url = repos_url;
    this.type = type;
  }
}
