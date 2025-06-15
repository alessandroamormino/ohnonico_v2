import { Box, Typography, Link } from '@mui/material';
import { useTheme } from "@mui/material/styles";

const commonIconStyles = {
  fontSize: "1.5rem",
  textDecoration: "none",
};

export const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: theme.palette.background.main, color: "#fff", py: 4 }}
    >
      {/* Layout Desktop: logo a sinistra, centro e contatti a destra */}
      <Box
        sx={{
          display: { xs: "none", md: "grid" },
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          px: 5,
        }}
      >
        {/* Left: Footer Logo */}
        <Box sx={{ mb: 2, display: "flex", justifyContent: "flex-start" }}>
          <Link href="/illustrations" underline="none">
            <Box
              component="img"
              src="/images/footer/ONN_FOOTER.svg"
              alt="Footer Icon"
              sx={{ height: 100 }}
            />
          </Link>
        </Box>
        {/* Center: Social icons e copyright */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
            <Link
              href="https://www.linkedin.com/in/niccol%C3%B2-valsecchi-3b9b52246/"
              target="_blank"
              sx={{ color: "inherit" }}
            >
              <i className="fa-brands fa-linkedin" style={{ ...commonIconStyles }}></i>
            </Link>
            <Link
              href="https://www.instagram.com/ohnonico_/"
              target="_blank"
              sx={{ color: "inherit" }}
            >
              <i className="fa-brands fa-instagram" style={{ ...commonIconStyles }}></i>
            </Link>
            <Link
              href="https://vimeo.com/nvart"
              target="_blank"
              sx={{ color: "inherit" }}
            >
              <i className="fa-brands fa-vimeo-v" style={{ ...commonIconStyles }}></i>
            </Link>
          </Box>
          <Typography variant="caption" sx={{ fontFamily: "Light", fontSize: ".8rem" }}>
            &#169; 2025 OH NO, NICO All rights reserved
          </Typography>
        </Box>
        {/* Right: Contatti */}
        <Box
          sx={{
            mb: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <Typography variant="body2" sx={{ fontFamily: "Light", fontSize: "1.2rem", mb: 1 }}>
            Lets get in touch!
          </Typography>
          <Link
            href="mailto:ohnonicoagain@gmail.com?subject=Let's%20meet!"
            underline="hover"
            sx={{ color: "inherit", fontFamily: "ExtraBold", fontSize: "1.2rem" }}
          >
            ohnonicoagain@gmail.com
          </Link>
        </Box>
      </Box>
      {/* Layout Mobile: elementi disposti verticalmente */}
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          textAlign: "center",
          px: 3,
        }}
      >
        <Typography variant="body2" sx={{ fontFamily: "Light", fontSize: "1.2rem", mb: 1 }}>
          Lets get in touch!
        </Typography>
        <Link
          href="mailto:ohnonicoagain@gmail.com?subject=Let's%20meet!"
          underline="hover"
          sx={{
            color: "inherit",
            fontFamily: "ExtraBold",
            fontSize: ".9rem",
            display: "block",
            mb: 2,
          }}
        >
          ohnonicoagain@gmail.com
        </Link>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
          <Link
            href="https://www.linkedin.com/in/niccol%C3%B2-valsecchi-3b9b52246/"
            target="_blank"
            sx={{ color: "inherit" }}
          >
            <i className="fa-brands fa-linkedin" style={{ ...commonIconStyles }}></i>
          </Link>
          <Link
            href="https://www.instagram.com/ohnonico_/"
            target="_blank"
            sx={{ color: "inherit" }}
          >
            <i className="fa-brands fa-instagram" style={{ ...commonIconStyles }}></i>
          </Link>
          <Link
            href="https://vimeo.com/nvart"
            target="_blank"
            sx={{ color: "inherit" }}
          >
            <i className="fa-brands fa-vimeo-v" style={{ ...commonIconStyles }}></i>
          </Link>
        </Box>
        <Typography variant="caption" sx={{ fontFamily: "Light", fontSize: ".7rem" }}>
         	&copy; {new Date().getFullYear()} ONN. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};