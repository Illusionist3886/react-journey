1. **What is the difference between a library and a framework?**

   Libraries are simple and small package that can be easily plugged into existing project to enhance features or interactivity of the project. On the other hand a framework is more than that. It helps to structure entire project by maintaining software development patterns.
    
3. **What is CDN? Why do we use it?**

	CDN stands for Content Delivery Network. They have multiple server in multiple locations so the down time is 0 (theoretically). The advantage we get from CDN is by using CDN our server uses less resources. And if the client browser already have that CDN's resource on the browser, when an end user visit the site, the resources will load from users browser's cache (As CDN tells the browser to keep caches for specific period of time). As a result we get faster page loads.
	
4. **What is cross-origin in the script tag?**

    cross-origin is mostly for security. When we load assets from third party CDN we don't want to expose our users data to that third party. When using `crossorigin` it by default sets the value to `anonymous` and thus when a script is loaded the user info will not be passed through the request. Another value apart from `anonymous` is `user-credentials`, which sends user information in request.
    
4. **What is the difference between React and ReactDOM?**

    React is a library and one of its many things are ReactDOM. ReactDOM is used to render components on web application. It is also used control the state of the components. It also provides some APIs for these and other operations.
    
5. **Difference between react.development.js and react.production.js files via CDN?**
    
	Development mode is for development purpose and it helps to debug the app using Reacts Debug Toolbar, the file size is larger in this case. In Production the file is compressed and it cannot be debug using React Debug Toolbar.
