﻿using Microsoft.AspNetCore.Hosting;

[assembly: HostingStartup(typeof(IdentityServer.Web.Areas.Identity.IdentityHostingStartup))]
namespace IdentityServer.Web.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) => {
            });
        }
    }
}