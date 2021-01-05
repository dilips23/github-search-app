export class ProfileDetail {
  public login: string;
  public id: string;
  public node_id: string;
  public avatar_url: string;
  public url: string;
  public html_url: string;
  public followers_url: string;
  public gists_url: string;
  public organizations_url: string;
  public repos_url: string;
  public type: string;
  public site_admin: string;
  public name: string;
  public company: string;
  public blog: string;
  public location: string;
  public email: string;
  public hireable: string;
  public bio: string;
  public twitter_username: string;
  public public_repos: string;
  public public_gists: string;
  public followers: string;
  public following: string;
  public created_at: string;
  public updated_at: string;

  constructor(
    login: string,
    id: string,
    node_id: string,
    avatar_url: string,
    url: string,
    html_url: string,
    followers_url: string,
    gists_url: string,
    organizations_url: string,
    repos_url: string,
    type: string,
    site_admin: string,
    name: string,
    company: string,
    blog: string,
    location: string,
    email: string,
    hireable: string,
    bio: string,
    twitter_username: string,
    public_repos: string,
    public_gists: string,
    followers: string,
    following: string,
    created_at: string,
    updated_at: string
   ) {
    this.login = login;
    this.id = id;
    this.node_id = node_id;
    this.avatar_url = avatar_url;
    this.url = url;
    this.html_url = html_url;
    this.followers_url = followers_url;
    this.gists_url = gists_url;
    this.organizations_url = organizations_url;
    this.repos_url = repos_url;
    this.type = type;
    this.site_admin = site_admin;
    this.name = name;
    this.company = company;
    this.blog = blog;
    this.location = location;
    this.email = email;
    this.hireable = hireable;
    this.bio = bio;
    this.twitter_username = twitter_username;
    this.public_repos = public_repos;
    this.public_gists = public_gists;
    this.followers = followers;
    this.following = following;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
