using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace NetCore_Angular
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = BuildWebHost(args);

            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                try
                {
                    var context = services.GetRequiredService<ApiContext>();
                    SeedData(context);
                }
                catch (Exception ex)
                {
                    var logger = services.GetRequiredService<ILogger<Program>>();
                    logger.LogError(ex, "An error occurred while seeding the database.");
                }
            }

            host.Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build();


        public static void SeedData(ApiContext context)
        {
            context.Messages.Add(new Models.Message
            {
                Owner = "John",
                Text = "hello"
            });

            context.Messages.Add(new Models.Message
            {
                Owner = "Tim",
                Text = "Hi"
            });

            context.Users.Add(new Models.User { Email = "a", FirstName = "Azazel", LastName = "Burito", Password = "a", Id = "1" });

            context.SaveChanges();
        }
    }
}
