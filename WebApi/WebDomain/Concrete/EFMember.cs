using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebDomain.Abstract;
using WebDomain.Entity;

namespace WebDomain.Concrete
{
    public class EFMember : IMember
    {
        private readonly Entity.Entity entity = new Entity.Entity();
    }
}
