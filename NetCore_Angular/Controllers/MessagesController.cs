using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace NetCore_Angular.Controllers
{
    [Produces("application/json")]
    [Route("api/Messages")]
    public class MessagesController : Controller
    {
        public IEnumerable<Models.Message> Get()
        {
            return new Models.Message[]
            {
                new Models.Message{
                    owner = "John",
                    text = "hello"
                },
                new Models.Message{
                    owner = "Tim",
                    text = "Hi"
                }
            };
        }
    }
}