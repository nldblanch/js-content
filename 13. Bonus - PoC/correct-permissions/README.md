# Permission-Based Access Control Challenge

## 🎯 Overview

This challenge will test your understanding of **role-based access control (RBAC)** in web applications. You'll need to implement permission checking logic that controls what users can see and access based on their role.

## 📋 The Problem

The application is currently **broken**! Users with different roles (Guest, User, Manager, Admin) should have different levels of access, but right now:

- ❌ All navigation links show up for everyone
- ❌ All routes are accessible to everyone
- ❌ The sidebar doesn't filter based on permissions

## 🎓 Your Task

Implement the `PermissionManager` class in `src/utils/permissions.js` to fix the application.

### Files to Edit

**`src/utils/permissions.js`** - This is the ONLY file you need to modify!

You need to implement the `PermissionManager` class with the following methods:

1. **`constructor(userRole)`**
   - Initialize the class with a user role
   - Store the user's role and their permissions

2. **`hasPermission(requiredPermission)`**
   - Check if the user has a specific permission
   - Return `true` if they have access, `false` otherwise

3. **`canAccessRoute(requiredPermission)`**
   - Determine if a user can access a route
   - Use the `hasPermission` method you implemented

4. **`getAccessibleLinks(links)`**
   - Filter navigation links based on user permissions
   - Return only the links the user can access

### Object-Oriented Approach

This challenge uses **Object-Oriented Programming (OOP)**. You'll create a `PermissionManager` class that encapsulates all permission logic:

```javascript
const permissionManager = new PermissionManager('admin');
permissionManager.hasPermission('view_users'); // true
permissionManager.getAccessibleLinks(navLinks); // filtered links
```

## 🔍 How to Test

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Use the **Role Switcher** in the top-right corner to test different user roles:
   - **Guest** - Can only see Dashboard
   - **User** - Can see Dashboard and Reports
   - **Manager** - Can see Dashboard, Users, Reports, and Analytics
   - **Admin** - Can see everything (all 5 pages)

4. Try clicking on different navigation items:
   - If your implementation is correct, you should only see navigation items you have access to
   - Trying to access restricted pages should show an "Access Denied" message

## 📊 Expected Behavior

### Guest Role
- ✅ Can access: Dashboard
- ❌ Cannot access: Users, Reports, Analytics, Settings

### User Role
- ✅ Can access: Dashboard, Reports
- ❌ Cannot access: Users, Analytics, Settings

### Manager Role
- ✅ Can access: Dashboard, Users, Reports, Analytics
- ❌ Cannot access: Settings

### Admin Role
- ✅ Can access: Everything!

## 💡 Hints

<details>
<summary>Hint 1: Understanding the Class Structure</summary>

The `PermissionManager` class needs to:
- Store the user's role in `this.userRole`
- Store the user's permissions in `this.permissions` (get from `rolePermissions[userRole]`)
- Use `this.permissions` in the methods to check access
</details>

<details>
<summary>Hint 2: Implementing the Constructor</summary>

In the constructor:
1. Store the `userRole` parameter as an instance property
2. Get the permissions array from `rolePermissions` object
3. Handle the case where the role doesn't exist (use `|| []`)
</details>

<details>
<summary>Hint 3: Instance Methods</summary>

Instance methods can access:
- `this.userRole` - The current user's role
- `this.permissions` - Array of permissions for this role
- Other methods using `this.methodName()`
</details>

<details>
<summary>Hint 4: Array Methods</summary>

Useful array methods:
- `.includes()` - Check if an array contains a value
- `.filter()` - Create a new array with elements that pass a test
</details>

## ✅ Success Criteria

Your implementation is correct when:

1. ✅ The sidebar only shows navigation items the current user can access
2. ✅ Clicking on restricted pages shows "Access Denied"
3. ✅ The sidebar footer shows the correct count of accessible pages
4. ✅ Switching roles updates what's visible and accessible
5. ✅ All four roles behave as expected (see Expected Behavior above)
## 📚 Learning Objectives

After completing this challenge, you should understand:

- How to implement **Object-Oriented Programming** in JavaScript
- How to create and use **classes** with constructors and instance methods
- How **role-based access control (RBAC)** works in web applications
- How to implement permission checking logic using OOP principles
- How to filter UI elements based on user permissions
- How to protect routes from unauthorized access
- **Encapsulation** - keeping related data and methods together in a class
- Real-world security patterns used in production applications role permissions

## 📚 Learning Objectives

After completing this challenge, you should understand:

- How role-based access control works in web applications
- How to implement permission checking logic
- How to filter UI elements based on user permissions
- How to protect routes from unauthorized access
- Real-world security patterns used in production applications

## 🔐 Security Note

In a real application, permission checks should happen on the **backend/server** as well. Frontend permission checks are for UX only - they hide UI elements and show helpful messages, but they don't provide actual security. Never trust the client!

---

## Setup

Install the dependencies:

```bash
npm install
```

## Get started

Start the dev server, and the app will be available at [http://localhost:3000](http://localhost:3000).

```bash
npm run dev
```

Build the app for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Good luck! 🎉

