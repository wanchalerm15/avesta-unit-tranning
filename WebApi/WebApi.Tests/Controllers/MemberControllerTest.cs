using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApi.Controllers;
using WebDomain.Abstract;
using WebDomain.Entity;

namespace WebApi.Tests.Controllers
{
    [TestClass]
    public class MemberControllerTest
    {
        public IEnumerable<Member> FakeMembers => new List<Member>
        {
            new Member { Id = 1, Firstname = "First 1", Lastname = "Last 1", Old = 3, Created = DateTime.Now, Updated = DateTime.Now },
            new Member { Id = 2, Firstname = "First 2", Lastname = "Last 2", Old = 2, Created = DateTime.Now, Updated = DateTime.Now },
        };

        [TestMethod]
        public void Get()
        {
            var mock = new Mock<IMember>();
            mock.Setup(m => m.Items).Returns(FakeMembers);

            var controller = new MemberController(mock.Object);
            var result = controller.Get();
            Assert.AreEqual(2, result.Count());
            Assert.AreEqual("First 2", result.ToList()[1].Firstname);
        }

        [TestMethod]
        public void GetById()
        {
            var mock = new Mock<IMember>();
            mock.Setup(m => m.Items).Returns(FakeMembers);
            var controller = new MemberController(mock.Object);

            var result = controller.Get(2);
            Assert.AreEqual("First 2", result.Firstname);
            Assert.AreEqual("Last 2", result.Lastname);
            Assert.AreEqual(2, result.Old);
        }
    }
}
