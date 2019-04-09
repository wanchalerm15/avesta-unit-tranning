using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebDomain.Abstract;
using WebDomain.Entity;

namespace WebApi.Controllers
{
    public class MemberController : ApiController
    {
        private IMember _Member;
        public MemberController(IMember _Member)
        {
            this._Member = _Member;
        }
    }
}