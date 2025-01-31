// components/common/StatusBadge.js
import React from 'react';
import { 
    CheckCircle, 
    AlertCircle, 
    Clock, 
    XCircle, 
    AlertTriangle 
} from 'lucide-react';
import './StatusBadge.css';

const StatusBadge = ({ status, size = 'medium', withIcon = true }) => {
    const getStatusConfig = (status) => {
        const statusMap = {
            active: {
                icon: CheckCircle,
                className: 'success',
                label: 'Active'
            },
            completed: {
                icon: CheckCircle,
                className: 'success',
                label: 'Completed'
            },
            pending: {
                icon: Clock,
                className: 'warning',
                label: 'Pending'
            },
            processing: {
                icon: Clock,
                className: 'info',
                label: 'Processing'
            },
            failed: {
                icon: XCircle,
                className: 'error',
                label: 'Failed'
            },
            rejected: {
                icon: XCircle,
                className: 'error',
                label: 'Rejected'
            },
            suspended: {
                icon: AlertCircle,
                className: 'error',
                label: 'Suspended'
            },
            warning: {
                icon: AlertTriangle,
                className: 'warning',
                label: 'Warning'
            }
        };

        return statusMap[status.toLowerCase()] || {
            icon: AlertCircle,
            className: 'default',
            label: status
        };
    };

    const config = getStatusConfig(status);
    const StatusIcon = config.icon;

    return (
        <div className={`status-badge ${config.className} ${size}`}>
            {withIcon && <StatusIcon size={size === 'small' ? 12 : 16} />}
            <span>{config.label}</span>
        </div>
    );
};

// Example usage:
// <StatusBadge status="active" size="medium" withIcon={true} />
// <StatusBadge status="pending" size="small" withIcon={false} />
// <StatusBadge status="failed" size="large" />

export default StatusBadge;