namespace Blogger.Migrations
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Blogger.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(Blogger.Models.ApplicationDbContext context)
        {
            var roleManager = new RoleManager<IdentityRole>(
                new RoleStore<IdentityRole>(context));

            if (!context.Roles.Any(r => r.Name == "Admin"))
            {
                roleManager.Create(new IdentityRole { Name = "Admin" });
            }

            if (!context.Roles.Any(r => r.Name == "Moderator"))
            {
                roleManager.Create(new IdentityRole { Name = "Moderator" });
            }

            var userManager = new UserManager<ApplicationUser>(
                new UserStore<ApplicationUser>(context));

            if (!context.Users.Any(u => u.Email == "your email address"))
            {
                userManager.Create(new ApplicationUser
                {
                    UserName = "jacobcrawford1990@gmail.com",
                    Email = "jacobcrawford1990@gmail.com",
                    FirstName = "Jacob",
                    LastName = "Crawford",
                    DisplayName = "Jacob"
                }, ".CoderFoundry$");
            }
            if (!context.Users.Any(u => u.Email == "Moderator@CoderFoundry.com"))
            {
                userManager.Create(new ApplicationUser
                {
                    UserName = "jtwichell@CoderFoundry.com",
                    Email = "jtwichell@CoderFoundry.com",
                    FirstName = "Jason",
                    LastName = "Twichell",
                    DisplayName = "Moderator"
                }, "LearnToCode1");
            }

            var userId = userManager.FindByEmail("jacobcrawford1990@gmail.com").Id;
            userManager.AddToRole(userId, "Admin");

            var mod = userManager.FindByEmail("jtwichell@CoderFoundry.com").Id;
            userManager.AddToRole(userId, "Moderator");
        }
    }
}
