# CloudNC Angular Interview Challenge
(Fork of https://github.com/ngrx/example-app)

## The Challenge
Starting with the "Books" demo application for ngrx, add authenticated
protection to the application so a user cannot access books or
collections without valid credentials.

## Details
* The following components should be protected
(these are components that currenly have routes)
  * `CollectionPageComponent` - as this is currently the root route (`path: ''`)
  it should be moved to `/collection`
  * `FindBookPageComponent`
  * `ViewBookPageComponent`
* If a user attempts to access a protected route, they should be
redirected to the login page
* Once the user is logged in, they should see the phrase
`Logged In as ${username}` in the toolbar
* If the user is logged in, and they load the `/` route, they should be
redirected to the `/collection` page
* The authentication service should simply be a stub that checks if the
submitted password is `password`. For example:
```ts
  /**
   * Asynchronously authenticate with a remote service
   * @todo(*) actually authenticate
   */
  public authenticate(username: string, password: string): Observable<boolean> {

    if (password === 'password') {
      console.info(`Logged in as ${username}`);
      return Observable.of(true);
    }

    console.info(`Access denied for ${username} (Incorrect password)`);

    return Observable.of(false);
  }
```
* The login state should be persisted to the browser database
(see `src/app/effects/collection.ts` for an example) so page refreshes
result in the user still being logged in
* If the user attempts to visit a protected page, after they are
redirected AND successfully log in, they should be redirected back to
the page that they were first attempting to visit

# Bonus! (if time allows)
* Write tests for the service/guard/reducer/component
