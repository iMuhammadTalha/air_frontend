const styles = theme => ({
    'portal-maps-contact-item--active': {
        color: theme.palette.primary.light
    },
    'portal-maps-contact-detail-card': {
        background: theme.palette.primary.light,
        color: theme.palette.primary.contrastText
    },
    'portal-maps-contact-detail-card__pin': {
        background: theme.palette.primary.contrastText,
        '&:after': {
            background: theme.palette.primary.main
        }
    },
    'portal-maps-contact-detail-card__pulse': {
        background: theme.palette.primary.main,
        '&:after': {
            boxShadow: `0 0 1px 2px ${theme.palette.primary.main}`
        }
    }
});

export default styles;
