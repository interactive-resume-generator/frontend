import {
  Avatar,
  Dropdown,
  Modal,
  Navbar,
  Label,
  TextInput,
  Button,
} from "flowbite-react";
import { useAuth } from "@/contexts/auth";

export default function Nav() {
  const { user, logout, login } = useAuth();

  const handleSignIn = (e) => {
    e.preventDefault();
    login(e.target.username.value, e.target.password.value);
    console.log("logging in");
  };

  return (
    <>
      <Navbar fluid={true} className="nav">
        <div className="flex md:order-2">
          {user ? (
            <>
              <Dropdown
                arrowIcon={false}
                inline={true}
                label={<Avatar alt="User settings" img={null} rounded={true} />}
              >
                <Dropdown.Header>
                  <span className="block text-sm">tester</span>
                  <span className="block truncate text-sm font-medium">
                    test@test.com
                  </span>
                </Dropdown.Header>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item onClick={logout}>Sign Out</Dropdown.Item>
              </Dropdown>
              <Navbar.Toggle />
            </>
          ) : (
            <>
              <Dropdown
                arrowIcon={false}
                inline={true}
                label={<Avatar alt="Not logged in" img={null} rounded={true} />}
                dismissOnClick={false}
              >
                <Dropdown.Item>
                  <form className="flex flex-col gap-4" onSubmit={handleSignIn}>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="username" value="Username" />
                      </div>
                      <TextInput
                        id="username"
                        type="text"
                        placeholder="user"
                        required={true}
                      />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="password" value="Password" />
                      </div>
                      <TextInput
                        id="password"
                        type="password"
                        required={true}
                      />
                    </div>
                    <Button type="submit">Sign In</Button>
                  </form>
                </Dropdown.Item>
              </Dropdown>
            </>
          )}
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/edit">Edit</Navbar.Link>
          <Navbar.Link href="/portfolio">Portfolio</Navbar.Link>
          <Navbar.Link href="/ResumeForm">Create</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
