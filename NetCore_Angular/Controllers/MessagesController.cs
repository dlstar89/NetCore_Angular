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
        static List<Models.Message> messages = new
            List<Models.Message> {
                new Models.Message{
                    owner = "John",
                    text = "hello"
                },
                new Models.Message{
                    owner = "Tim",
                    text = "Hi"
                }
        };



        [HttpGet]
        public IEnumerable<Models.Message> Get()
        {
            return messages;
        }

        [HttpGet("{name}")]
        public IEnumerable<Models.Message> Get(string name)
        {
            return messages.FindAll(message => message.owner == name);
        }

        [HttpPost]
        public Models.Message Post([FromBody] Models.Message message)
        {
            messages.Add(message);
            return message;
        }
    }
}